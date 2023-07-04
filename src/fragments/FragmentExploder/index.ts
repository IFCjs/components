import * as THREE from "three";
import { Component, Disposable } from "../../base-types";
import { FragmentClassifier, FragmentManager } from "../index";

// TODO: Clean up and document

export class FragmentExploder
  extends Component<Set<string>>
  implements Disposable
{
  name = "FragmentExploder";
  height = 10;
  groupName = "storeys";
  enabled = false;

  private _explodedFragments = new Set<string>();

  get(): Set<string> {
    return this._explodedFragments;
  }

  constructor(
    public fragments: FragmentManager,
    public groups: FragmentClassifier
  ) {
    super();
  }

  dispose() {
    this._explodedFragments.clear();
    (this.fragments as any) = null;
    (this.groups as any) = null;
  }

  explode() {
    this.enabled = true;
    this.update();
  }

  reset() {
    this.enabled = false;
    this.update();
  }

  update() {
    const factor = this.enabled ? 1 : -1;
    let i = 0;

    const systems = this.groups.get();
    const groups = systems[this.groupName];

    for (const groupName in groups) {
      for (const fragID in groups[groupName]) {
        const fragment = this.fragments.list[fragID];
        const customID = groupName + fragID;
        if (!fragment) {
          continue;
        }
        if (this.enabled && this._explodedFragments.has(customID)) {
          continue;
        }
        if (!this.enabled && !this._explodedFragments.has(customID)) {
          continue;
        }
        if (this.enabled) {
          this._explodedFragments.add(customID);
        } else {
          this._explodedFragments.delete(customID);
        }

        const yTransform = this.getOffsetY(i * factor);
        if (fragment.blocks.count === 1) {
          // For instanced fragments
          const ids = groups[groupName][fragID];
          for (const id of ids) {
            const tempMatrix = new THREE.Matrix4();
            const { instanceID } = fragment.getInstanceAndBlockID(id);
            fragment.getInstance(instanceID, tempMatrix);
            tempMatrix.premultiply(yTransform);
            fragment.setInstance(instanceID, {
              transform: tempMatrix,
              ids: [id],
            });
          }
        } else {
          // For merged fragments
          const tempMatrix = new THREE.Matrix4();
          fragment.getInstance(0, tempMatrix);
          tempMatrix.premultiply(yTransform);
          fragment.setInstance(0, {
            transform: tempMatrix,
            ids: fragment.items,
          });
        }
        fragment.mesh.instanceMatrix.needsUpdate = true;
      }
      i++;
    }
  }

  private getOffsetY(y: number) {
    const w = y * this.height;
    // prettier-ignore
    return new THREE.Matrix4().fromArray([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, w, 0, 1,
    ]);
  }
}
