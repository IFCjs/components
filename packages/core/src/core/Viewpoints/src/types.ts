import { SimplePlane } from "../../Clipper";
import { DataSet } from "../../Types";

export interface ViewpointCamera {
  direction: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  aspectRatio: number;
}

export interface ViewpointPerspectiveCamera extends ViewpointCamera {
  fov: number;
}

export interface ViewpointOrthographicCamera extends ViewpointCamera {
  viewToWorldScale: number;
}

export interface BCFViewpoint {
  name: string;
  guid: string;
  camera: ViewpointPerspectiveCamera | ViewpointOrthographicCamera;
  selectionComponents: Iterable<string>;
  exceptionComponents: Iterable<string>;
  clippingPlanes: DataSet<SimplePlane>;
  spacesVisible: boolean;
  spaceBoundariesVisible: boolean;
  openingsVisible: boolean;
  defaultVisibility: boolean;
}
