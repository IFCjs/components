import * as THREE from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { Createable, Event, UI, Component, Disposable } from "../../base-types";
import { Components } from "../../core";
import { Button } from "../../ui";
import { VertexPicker } from "../../utils";
import { AngleMeasureElement } from "../AngleMeasureElement";

export class AngleMeasurement
  extends Component<AngleMeasureElement[]>
  implements Createable, UI, Disposable
{
  name: string = "AngleMeasurement";
  uiElement: { main: Button };

  private _lineMaterial: LineMaterial;
  private _components: Components;
  private _enabled: boolean = false;
  private _vertexPicker: VertexPicker;
  private _currentAngleElement: AngleMeasureElement | null = null;
  private _clickCount: number = 0;
  private _measurements: AngleMeasureElement[] = [];

  readonly beforeCreate = new Event<any>();
  readonly afterCreate = new Event<AngleMeasureElement>();
  readonly beforeCancel = new Event<any>();
  readonly afterCancel = new Event<any>();
  readonly beforeDelete = new Event<any>();
  readonly afterDelete = new Event<any>();

  set lineMaterial(material: LineMaterial) {
    this._lineMaterial.dispose();
    this._lineMaterial = material;
    this._lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
  }

  get lineMaterial() {
    return this._lineMaterial;
  }

  set enabled(value: boolean) {
    this._enabled = value;
    this.setupEvents(value);
    this._vertexPicker.enabled = value;
    this.uiElement.main.active = value;
    if (!value) this.cancelCreation();
  }

  get enabled() {
    return this._enabled;
  }

  set workingPlane(plane: THREE.Plane | null) {
    this._vertexPicker.workingPlane = plane;
  }

  get workingPlane() {
    return this._vertexPicker.workingPlane;
  }

  constructor(components: Components) {
    super();
    this._components = components;
    this._lineMaterial = new LineMaterial({
      color: 0x6528d7,
      linewidth: 2,
    });
    this._vertexPicker = new VertexPicker(components);
    this.uiElement = { main: new Button(components) };
    this.uiElement.main.materialIcon = "square_foot";
    this.enabled = false;
    this.setUI();
  }

  dispose() {
    this.setupEvents(false);
    this.beforeCreate.reset();
    this.afterCreate.reset();
    this.beforeCancel.reset();
    this.afterCancel.reset();
    this.beforeDelete.reset();
    this.afterDelete.reset();
    this.uiElement.main.dispose();
    this._lineMaterial.dispose();
    this._vertexPicker.dispose();
    for (const measure of this._measurements) {
      measure.dispose();
    }
    if (this._currentAngleElement) {
      this._currentAngleElement.dispose();
    }
    (this._components as any) = null;
  }

  private setUI() {
    this.uiElement.main.onclick = () => {
      if (!this.enabled) {
        this.uiElement.main.active = true;
        this.enabled = true;
      } else {
        this.enabled = false;
        this.uiElement.main.active = false;
      }
    };
  }

  create = () => {
    if (!this.enabled) return;
    const point = this._vertexPicker.get();
    if (!point) return;
    if (!this._currentAngleElement) {
      const angleElement = new AngleMeasureElement(this._components);
      angleElement.lineMaterial = this.lineMaterial;
      // angleElement.onPointRemoved.on(() => this._clickCount--);
      this._currentAngleElement = angleElement;
    }
    this._currentAngleElement.setPoint(point, this._clickCount as 0 | 1 | 2);
    this._currentAngleElement.setPoint(
      point,
      (this._clickCount + 1) as 0 | 1 | 2
    );
    this._currentAngleElement.setPoint(
      point,
      (this._clickCount + 2) as 0 | 1 | 2
    );
    this._currentAngleElement.computeAngle();
    this._clickCount++;
    if (this._clickCount === 3) this.endCreation();
  };

  delete() {}

  endCreation() {
    if (this._currentAngleElement) {
      this._measurements.push(this._currentAngleElement);
      this._currentAngleElement.computeAngle();
      this._currentAngleElement = null;
    }
    this._clickCount = 0;
  }

  cancelCreation() {
    if (this._currentAngleElement) {
      this._currentAngleElement.dispose();
      this._currentAngleElement = null;
    }
    this._clickCount = 0;
  }

  get() {
    return this._measurements;
  }

  private setupEvents(active: boolean) {
    const viewerContainer = this._components.ui.viewerContainer as HTMLElement;
    if (active) {
      viewerContainer.addEventListener("click", this.create);
      viewerContainer.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("keydown", this.onKeyDown);
    } else {
      this.uiElement.main.active = false;
      viewerContainer.removeEventListener("click", this.create);
      viewerContainer.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("keydown", this.onKeyDown);
    }
  }

  private onMouseMove = () => {
    const point = this._vertexPicker.get();
    if (!(point && this._currentAngleElement)) return;
    this._currentAngleElement.setPoint(point, this._clickCount as 0 | 1 | 2);
    this._currentAngleElement.computeAngle();
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (!this.enabled) return;
    if (e.key === "z" && e.ctrlKey && this._currentAngleElement) {
      // this._currentAngleElement.removePoint(this._clickCount - 1);
    }
    if (e.key === "Escape") {
      if (this._clickCount === 0 && !this._currentAngleElement) {
        this.enabled = false;
      } else {
        this.cancelCreation();
      }
    }
  };
}
