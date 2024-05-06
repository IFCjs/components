import * as THREE from "three";
import { CullerRenderer, CullerRendererSettings } from "./culler-renderer";
import { Components } from "../../Components";
import { Disposer } from "../../Disposer";
import { Event, World } from "../../Types";
import { MaterialsUtils } from "../../../utils";

/**
 * A renderer to determine a mesh visibility on screen
 */
export class MeshCullerRenderer extends CullerRenderer {
  /* Pixels in screen a geometry must occupy to be considered "seen". */
  threshold = 100;

  readonly onViewUpdated: Event<{
    seen: Set<THREE.Mesh>;
    unseen: Set<THREE.Mesh>;
  }> = new Event();

  colorMeshes = new Map<string, THREE.InstancedMesh>();

  isProcessing = false;

  private _colorCodeMeshMap = new Map<string, THREE.Mesh>();
  private _meshIDColorCodeMap = new Map<string, string>();

  private _currentVisibleMeshes = new Set<THREE.Mesh>();
  private _recentlyHiddenMeshes = new Set<THREE.Mesh>();
  private _intervalID: number | null = null;

  private readonly _transparentMat = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  });

  constructor(
    components: Components,
    world: World,
    settings?: CullerRendererSettings,
  ) {
    super(components, world, settings);
    this.worker.addEventListener("message", this.handleWorkerMessage);
    if (this.autoUpdate) {
      window.setInterval(async () => {
        if (!this.isProcessing) {
          await this.updateVisibility();
        }
      }, this.updateInterval);
    }

    this.onViewUpdated.add(({ seen, unseen }) => {
      for (const mesh of seen) {
        mesh.visible = true;
      }
      for (const mesh of unseen) {
        mesh.visible = false;
      }
    });
  }

  dispose() {
    super.dispose();
    if (this._intervalID !== null) {
      window.clearInterval(this._intervalID);
      this._intervalID = null;
    }
    this._currentVisibleMeshes.clear();
    this._recentlyHiddenMeshes.clear();

    this._meshIDColorCodeMap.clear();
    this._transparentMat.dispose();
    this._colorCodeMeshMap.clear();
    const disposer = this.components.get(Disposer);
    for (const id in this.colorMeshes) {
      const mesh = this.colorMeshes.get(id);
      if (mesh) {
        disposer.destroy(mesh, true);
      }
    }
    this.colorMeshes.clear();
  }

  add(mesh: THREE.Mesh | THREE.InstancedMesh) {
    if (!this.enabled) return;

    if (this.isProcessing) {
      console.log("Culler processing not finished yet.");
      return;
    }

    this.isProcessing = true;

    const isInstanced = mesh instanceof THREE.InstancedMesh;

    const { geometry, material } = mesh;

    const { colorMaterial, code } = this.getAvailableMaterial();

    let newMaterial: THREE.Material[] | THREE.Material;

    if (Array.isArray(material)) {
      let transparentOnly = true;
      const matArray: any[] = [];

      for (const mat of material) {
        if (MaterialsUtils.isTransparent(mat)) {
          matArray.push(this._transparentMat);
        } else {
          transparentOnly = false;
          matArray.push(colorMaterial);
        }
      }

      // If we find that all the materials are transparent then we must remove this from analysis
      if (transparentOnly) {
        colorMaterial.dispose();
        this.isProcessing = false;
        return;
      }

      newMaterial = matArray;
    } else if (MaterialsUtils.isTransparent(material)) {
      // This material is transparent, so we must remove it from analysis
      // TODO: Make transparent meshes blink like in the memory culler?
      colorMaterial.dispose();
      this.isProcessing = false;
      return;
    } else {
      newMaterial = colorMaterial;
    }

    this._colorCodeMeshMap.set(code, mesh);
    this._meshIDColorCodeMap.set(mesh.uuid, code);

    const count = isInstanced ? mesh.count : 1;
    const colorMesh = new THREE.InstancedMesh(geometry, newMaterial, count);

    if (isInstanced) {
      colorMesh.instanceMatrix = mesh.instanceMatrix;
    } else {
      colorMesh.setMatrixAt(0, new THREE.Matrix4());
    }

    mesh.visible = false;

    colorMesh.applyMatrix4(mesh.matrix);
    colorMesh.updateMatrix();

    this.scene.add(colorMesh);
    this.colorMeshes.set(mesh.uuid, colorMesh);

    this.increaseColor();

    this.isProcessing = false;
  }

  remove(mesh: THREE.Mesh | THREE.InstancedMesh) {
    if (this.isProcessing) {
      console.log("Culler processing not finished yet.");
      return;
    }

    this.isProcessing = true;

    const disposer = this.components.get(Disposer);

    this._currentVisibleMeshes.delete(mesh);
    this._recentlyHiddenMeshes.delete(mesh);

    const colorMesh = this.colorMeshes.get(mesh.uuid);
    const code = this._meshIDColorCodeMap.get(mesh.uuid);

    if (!colorMesh || !code) {
      this.isProcessing = false;
      console.log(mesh.visible);
      return;
    }

    this._colorCodeMeshMap.delete(code);
    this._meshIDColorCodeMap.delete(mesh.uuid);
    this.colorMeshes.delete(mesh.uuid);
    colorMesh.geometry = undefined as any;
    colorMesh.material = [];
    disposer.destroy(colorMesh, true);

    this._recentlyHiddenMeshes.delete(mesh);
    this._currentVisibleMeshes.delete(mesh);

    this.isProcessing = false;
  }

  private handleWorkerMessage = async (event: MessageEvent) => {
    if (this.isProcessing) {
      return;
    }

    const colors = event.data.colors as Map<string, number>;

    this._recentlyHiddenMeshes = new Set(this._currentVisibleMeshes);
    this._currentVisibleMeshes.clear();

    for (const [code, pixels] of colors) {
      if (pixels < this.threshold) {
        continue;
      }
      const mesh = this._colorCodeMeshMap.get(code);
      if (mesh) {
        this._currentVisibleMeshes.add(mesh);
        this._recentlyHiddenMeshes.delete(mesh);
      }
    }

    this.onViewUpdated.trigger({
      seen: this._currentVisibleMeshes,
      unseen: this._recentlyHiddenMeshes,
    });

    this._isWorkerBusy = false;
  };

  private getAvailableMaterial() {
    const { r, g, b, code } = this.getAvailableColor();

    const colorEnabled = THREE.ColorManagement.enabled;
    THREE.ColorManagement.enabled = false;

    const color = new THREE.Color(`rgb(${r}, ${g}, ${b})`);

    if (!this.world.renderer) {
      throw new Error("Renderer not found in the world!");
    }

    const clippingPlanes = this.world.renderer.clippingPlanes;
    const colorMaterial = new THREE.MeshBasicMaterial({
      color,
      clippingPlanes,
      side: THREE.DoubleSide,
    });

    THREE.ColorManagement.enabled = colorEnabled;
    return { colorMaterial, code };
  }
}
