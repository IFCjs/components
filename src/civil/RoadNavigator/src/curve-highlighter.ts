import * as THREE from "three";
import * as FRAGS from "bim-fragment";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";


export class CurveHighlighter {
  private scene: THREE.Scene | THREE.Group;

  static settings = {
    colors: {
      LINE: [213 / 255, 0 / 255, 255 / 255],
      CIRCULARARC: [0 / 255, 46, 255 / 255],
      CLOTHOID: [0 / 255, 255 / 255, 234 / 255],
      PARABOLIC: [0 / 255, 255 / 255, 72 / 255],
    } as { [curve: string]: number[] },
  };

  selectCurve: Line2;

  selectPoints: THREE.Points;

  hoverCurve: Line2;

  hoverPoints: THREE.Points;

  constructor(scene: THREE.Group | THREE.Scene) {
    this.scene = scene;
    this.hoverCurve = this.newCurve(0.003, 0x444444, false);
    this.hoverPoints = this.newPoints(5, 0x444444);
    this.selectCurve = this.newCurve(0.005, 0xffffff, true);
    this.selectPoints = this.newPoints(7, 0xffffff);
  }

  dispose() {
    if (this.selectCurve) {
      this.scene.remove(this.selectCurve);
    }

    this.selectCurve.material.dispose();
    this.selectCurve.geometry.dispose();
    this.selectCurve = null as any;

    this.hoverCurve.material.dispose();
    this.hoverCurve.geometry.dispose();
    this.hoverCurve = null as any;

    (this.hoverPoints.material as THREE.Material).dispose();
    this.hoverPoints.geometry.dispose();

    (this.selectPoints.material as THREE.Material).dispose();
    this.selectPoints.geometry.dispose();

    this.scene = null as any;
  }

  select(mesh: FRAGS.CurveMesh) {
    this.highlight(mesh, this.selectCurve, this.selectPoints, true);
  }

  unSelect() {
    this.selectCurve.removeFromParent();
    this.selectPoints.removeFromParent();
  }

  hover(mesh: FRAGS.CurveMesh) {
    this.highlight(mesh, this.hoverCurve, this.hoverPoints, false);
  }

  unHover() {
    this.hoverCurve.removeFromParent();
    this.hoverPoints.removeFromParent();
  }

  private highlight(
    mesh: FRAGS.CurveMesh,
    curve: Line2,
    points: THREE.Points,
    useColors: boolean
  ) {
    const { alignment } = mesh.curve;

    this.scene.add(curve);
    this.scene.add(points);

    const lines: number[] = [];
    const colors: number[] = [];
    const vertices: THREE.Vector3[] = [];
    for (const foundCurve of alignment.horizontal) {
      const position = foundCurve.mesh.geometry.attributes.position;
      for (const coord of position.array) {
        lines.push(coord);
      }
      if (useColors) {
        const type = foundCurve.data.TYPE;
        const found = CurveHighlighter.settings.colors[type] || [1, 1, 1];
        for (let i = 0; i < position.count; i++) {
          colors.push(...found);
        }
      }
      const [x, y, z] = position.array;
      vertices.push(new THREE.Vector3(x, y, z));
    }

    const lastX = lines[lines.length - 3];
    const lastY = lines[lines.length - 2];
    const lastZ = lines[lines.length - 1];
    vertices.push(new THREE.Vector3(lastX, lastY, lastZ));

    if (lines.length / 3 > curve.geometry.attributes.position.count) {
      curve.geometry.dispose();
      curve.geometry = new LineGeometry();
    }

    curve.geometry.setPositions(lines);
    if (useColors) {
      curve.geometry.setColors(colors);
    }

    points.geometry.setFromPoints(vertices);
  }

  private newCurve(linewidth: number, color: number, vertexColors: boolean) {
    const selectGeometry = new LineGeometry();
    const selectMaterial = new LineMaterial({
      color,
      linewidth,
      vertexColors,
      worldUnits: false,
    });
    const curve = new Line2(selectGeometry, selectMaterial);
    this.scene.add(curve);
    return curve;
  }

  private newPoints(size: number, color: number) {
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsAttr = new THREE.BufferAttribute(new Float32Array(), 3);
    pointsGeometry.setAttribute("position", pointsAttr);
    const pointsMaterial = new THREE.PointsMaterial({ size, color });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    points.frustumCulled = false;
    this.scene.add(points);
    return points;
  }
}
