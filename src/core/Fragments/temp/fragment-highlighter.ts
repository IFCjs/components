import * as THREE from "three";
import { Fragment } from "bim-fragment";
import { Components, Disposable, Event } from "../../../";
import { Fragments } from "../";

// TODO: Clean up and document

interface SelectionMap {
  [fragmentID: string]: Set<string>
}

interface HighlightEvents {
  [name: string]: {
    onHighlight: Event<SelectionMap>
    onClear: Event<null>
  }
}

export class FragmentHighlighter implements Disposable {
  active = false;
  highlightMats: { [name: string]: THREE.Material[] | undefined } = {};
  
  highlightEvents: HighlightEvents = {}
  private tempMatrix = new THREE.Matrix4();
  private selection: {
    [selectionID: string]: SelectionMap;
  } = {};

  constructor(private components: Components, private fragments: Fragments) {}

  dispose() {
    for (const matID in this.highlightMats) {
      const mats = this.highlightMats[matID] || [];
      for (const mat of mats) {
        mat.dispose();
      }
    }
    this.highlightMats = {};
  }

  add(name: string, material?: THREE.Material[]) {
    if (this.highlightMats[name]) {
      throw new Error("A highlight with this name already exists.");
    }

    this.highlightMats[name] = material;
    this.selection[name] = {};
    this.highlightEvents[name] = {
      onHighlight: new Event(),
      onClear: new Event()
    }

    this.update();
  }

  update() {
    for (const fragmentID in this.fragments.list) {
      const fragment = this.fragments.list[fragmentID];
      this.addHighlightToFragment(fragment);
    }
  }

  highlight(name: string, removePrevious = true) {
    if (!this.active) return null;
    this.checkSelection(name);

    const meshes = this.fragments.meshes;
    const result = this.components.raycaster.castRay(meshes);

    if (!result) {
      this.clear(name);
      return null;
    }

    const mesh = result.object as THREE.Mesh;
    const geometry = mesh.geometry;
    const index = result.face?.a;
    const instanceID = result.instanceId;
    if (!geometry || !index || instanceID === undefined) {
      return null;
    }

    if (removePrevious) {
      this.clear(name);
    }

    if (!this.selection[name][mesh.uuid]) {
      this.selection[name][mesh.uuid] = new Set<string>();
    }

    const fragment = this.fragments.list[mesh.uuid];
    const blockID = fragment.getVertexBlockID(geometry, index);
    const itemID = fragment.getItemID(instanceID, blockID);
    this.selection[name][mesh.uuid].add(itemID);

    this.updateFragmentHighlight(name, mesh.uuid);

    return { id: itemID, fragment, modelId: fragment.mesh.parent?.uuid };
  }

  highlightByID(
    name: string,
    ids: { [fragmentID: string]: string[] },
    removePrevious = true
  ) {
    if (removePrevious) {
      this.clear(name);
    }
    const styles = this.selection[name];
    for (const fragID in ids) {
      if (!styles[fragID]) {
        styles[fragID] = new Set<string>();
      }
      for (const id of ids[fragID]) {
        styles[fragID].add(id);
      }
      this.updateFragmentHighlight(name, fragID);
    }
  }

  /**
   * Clears any selection previously made by calling {@link highlight}.
   */
  clear(name?: string) {
    const names = name ? [name] : Object.keys(this.selection);
    for (const name of names) {
      this.clearStyle(name);
    }
  }
  
  private clearStyle(name: string) {
    for (const fragID in this.selection[name]) {
      const fragment = this.fragments.list[fragID];
      if (!fragment) continue;
      const selection = fragment.fragments[name];
      if (selection) {
        selection.mesh.removeFromParent();
      }
    }
    this.highlightEvents[name].onClear.trigger(null)
    this.selection[name] = {};
  }

  private updateFragmentHighlight(name: string, fragmentID: string) {
    const ids = this.selection[name][fragmentID];
    const fragment = this.fragments.list[fragmentID];
    if (!fragment) return;
    const selection = fragment.fragments[name];
    if (!selection) return;

    //#region Old child/parent code
    const scene = this.components.scene.get();
    scene.add(selection.mesh); //If we add selection.mesh directly to the scene, it won't be coordinated unless we do so manually.
    //#endregion

    //#region New child/parent code
    const fragmentParent = fragment.mesh.parent
    if (!fragmentParent) return;
    fragmentParent.add(selection.mesh);
    //#endregion

    const isBlockFragment = selection.blocks.count > 1;

    if (isBlockFragment) {
      const blockIDs: number[] = [];
      for (const id of ids) {
        const { blockID } = fragment.getInstanceAndBlockID(id);
        if (fragment.blocks.visibleIds.has(blockID)) {
          blockIDs.push(blockID);
        }
      }

      fragment.getInstance(0, this.tempMatrix);
      selection.setInstance(0, {
        ids: Array.from(ids),
        transform: this.tempMatrix,
      });

      selection.blocks.add(blockIDs, true);
    } else {
      let i = 0;
      for (const id of ids) {
        selection.mesh.count = i + 1;
        const { instanceID } = fragment.getInstanceAndBlockID(id);
        fragment.getInstance(instanceID, this.tempMatrix);
        selection.setInstance(i, { ids: [id], transform: this.tempMatrix });
        i++;
      }
    }

    this.highlightEvents[name].onHighlight.trigger(this.selection[name])

  }

  private checkSelection(name: string) {
    if (!this.selection[name]) {
      throw new Error(`Selection ${name} does not exist.`);
    }
  }

  private addHighlightToFragment(fragment: Fragment) {
    for (const name in this.highlightMats) {
      if (!fragment.fragments[name]) {
        const material = this.highlightMats[name];
        fragment.addFragment(name, material);
        fragment.fragments[name].mesh.renderOrder = 1;
      }
    }
  }
}
