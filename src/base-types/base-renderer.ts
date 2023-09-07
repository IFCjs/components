import * as THREE from "three";
import { Component } from "./component";
import { Event, Resizeable } from "./base-types";

/**
 * A base component for other components whose main mission is to render a
 * [scene](https://threejs.org/docs/#api/en/scenes/Scene).
 * @noInheritDoc
 */
export abstract class BaseRenderer
  extends Component<THREE.WebGLRenderer>
  implements Resizeable
{
  /** {@link Component.name} */
  abstract name: string;

  /** {@link Component.enabled} */
  abstract enabled: boolean;

  /** {@link Component.get} */
  abstract get(): THREE.WebGLRenderer;

  /** {@link Resizeable.getSize}. */
  abstract getSize(): THREE.Vector2;

  /** {@link Resizeable.resize}. */
  abstract resize(): void;

  readonly onClippingPlanesUpdated = new Event();

  /**
   * The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
   * instance of the renderer.
   */
  clippingPlanes: THREE.Plane[] = [];

  updateClippingPlanes() {
    this.onClippingPlanesUpdated.trigger();
  }

  /**
   * Adds or removes a
   * [clipping plane](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes)
   * to the renderer.
   */
  togglePlane(active: boolean, plane: THREE.Plane, isLocal?: boolean) {
    (plane as any).isLocal = isLocal;

    const index = this.clippingPlanes.indexOf(plane);
    if (active && index === -1) {
      this.clippingPlanes.push(plane);
    } else if (!active && index > -1) {
      this.clippingPlanes.splice(index, 1);
    }

    const renderer = this.get();
    renderer.clippingPlanes = this.clippingPlanes.filter(
      (plane: any) => !plane.isLocal
    );
  }
}
