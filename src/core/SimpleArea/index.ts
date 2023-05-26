import { SimpleRaycaster } from '../SimpleRaycaster'
import { SimpleDimensionLine } from '../SimpleDimensions/simple-dimension-line'
import { PostproductionRenderer } from '../../navigation/PostproductionRenderer'
import { EdgesPlane } from '../../navigation/EdgesClipper/src/edges-plane'
// import { EdgesStyles } from '../../navigation/EdgesClipper/src/edges-styles'
import { Event, Disposable, Hideable, Updateable, UI } from '../../base-types/base-types'
import { Component } from '../../base-types/component'
import { SimpleDimensions } from '../SimpleDimensions'
import { DimensionPreviewClassName } from '../SimpleDimensions/types'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { Color, SphereGeometry, Vector3, MeshBasicMaterial, Mesh, Group, BoxGeometry, Quaternion, Euler, ShapeUtils, Shape, ExtrudeGeometry, DoubleSide, EdgesGeometry, LineSegments, Box3, LineDashedMaterial, PlaneGeometry, BufferGeometry, Object3D, Vector2 } from 'three'
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { SimpleTag } from '../SimpleTag'
import { Components } from '../Components'
import { Button } from '../../ui/ButtonComponent'

export interface SimpleAreaSettings {
  color: string | Color
  dashSize: number
  endPointSize: number
  forceHorizontal: boolean
  gapSize: number
  lineOpacity: number
  snapDistance: number
  snapPointFixed: boolean
}

interface Areas {
  points: Vector3[]
  perimeter: number
  area: number
  volume?: number
  color: Color | string
}

export class SimpleArea extends Component<Areas[]> implements Disposable, Hideable, Updateable, UI {
  
  name: string = "SimpleArea"
  uiElement!: Button
  private _components: Components
  private _areaLines!: SimpleDimensionLine[]
  private _areaPoints!: Vector3[]
  private _areas!: Areas[]
  private _enabled!: boolean
  private _endPointSize!: number
  // private _endpointMesh!: Mesh
  private _forceHorizontal!: boolean
  private _isHovering!: boolean
  private _lineMaterial!: LineDashedMaterial
  // private _outterCastingPlane!: Mesh
  private _htmlPreview!: HTMLElement
  private _previewElement!: CSS2DObject
  private _raycaster!: SimpleRaycaster
  private _snapPointFixed!: boolean
  private _visible!: boolean
  private _volumeMesh!: Mesh
  private _snapDistance: number
  private _perimeter: number
  // private _volumeHeight: number = 0
  private _areaCutPlane: EdgesPlane | null = null
  private _volumeEdges: LineSegments | null = null
  private _root: Group | null = null
  private _tempLine: SimpleDimensionLine | null = null
  private _hasVolumeCalculation: boolean = false
  private _outterCastPlane: Mesh | null = null
  private _heightTag: SimpleTag | null = null
  private _areaCenter: Vector3 | null = null
  private _outterCastNormal: Vector3 | null = null

  /** {@link Updateable.beforeUpdate} */
  readonly beforeUpdate: Event<SimpleDimensions> = new Event()

  /** {@link Updateable.afterUpdate} */
  readonly afterUpdate: Event<SimpleDimensions> = new Event()

  constructor(components: Components, settings: SimpleAreaSettings) {
    super()

    /** @satisfies SimpleAreaSettings */
    const {
      color,
      dashSize,
      endPointSize,
      forceHorizontal,
      gapSize,
      lineOpacity,
      snapDistance,
      snapPointFixed
    } = settings

    this._components = components

    /** The minimum distance to force the dimension cursor to a vertex. */
    this._snapDistance = snapDistance?? 0.25

    this._snapPointFixed = snapPointFixed ? snapPointFixed : false

    this._lineMaterial = new LineDashedMaterial({
      dashSize: dashSize ? dashSize : 1,
      depthTest: false,
      gapSize: gapSize ? gapSize : 0,
      opacity: lineOpacity ? lineOpacity : 1
    })

    this._enabled = false
    this._visible = true
    this._root = new Group()
    this._isHovering = false
    this._endPointSize = endPointSize ? endPointSize : 0.2
    this._perimeter = 0
    this._areas = []
    this._areaPoints = []
    this._areaLines = []

    this._forceHorizontal = forceHorizontal?? forceHorizontal

    this._raycaster = new SimpleRaycaster(components)

    this.color = new Color(color ? color : '#222')

    this._htmlPreview = document.createElement('div')
    this._htmlPreview.className = DimensionPreviewClassName
    this._htmlPreview.style.backgroundColor = color? color instanceof Color? color.getHexString() : color : '#0f0'
    this._previewElement = new CSS2DObject(this._htmlPreview)
    this._previewElement.visible = false
    this.addToScene(this._root)
    this.setUI()
  }

  private setUI() {
    const button = new Button(this._components, { materialIconName: "square_foot" })
    const viewerContainer = this._components.renderer.get().domElement.parentElement as HTMLElement
    const createDimension = () => this.create()
    button.onclick = () => {
      if (!this.enabled) {
        viewerContainer.addEventListener("click", createDimension)
        button.active = true
        this.enabled = true
      } else {
        this.enabled = false
        button.active = false
        viewerContainer.removeEventListener("click", createDimension)
      }
    };
    button.active = this.enabled
    this.uiElement = button
    window.addEventListener("keydown", e => {
      if (!this.enabled) {return}
      if (e.key === "Escape") {
        this.cancelDrawing()
        // if (this._temp.isDragging) { this.cancelDrawing() } else { this.enabled = false }
      } else if(e.key === "Enter") {
        this.closeArea()
      }
    })
  }

  /** {@link Component.get} */
  get() {
    return this._areas
  }

  private get cast() {
    return this._outterCastPlane
      ? this._raycaster.castRay([
          this._outterCastPlane,
          ...this._components.meshes
        ])
      : this._raycaster.castRay()
  }

  create() {
    if (!this._enabled) { return }

    if (!this._isHovering) {
      this._perimeter = 0

      // this._areas.push([])

      if (this._forceHorizontal) {
        this.startHorizontalArea()
        return
      } else {
        const point = this.cast?.point
        if (point) {this._areaPoints.push(point)}
        this._isHovering = true
        return
      }
    }

    this.continueArea()
  }

  private startHorizontalArea() {
    if (!this.cast) return

    const point =
      this._snapPointFixed && this.closestVertex
        ? this.closestVertex
        : this.cast.point

    if (!point) return
    this._areaPoints.push(point)

    if (this._forceHorizontal) {
      this.addHorizontalPlanes(point)
    }

    this._isHovering = true
  }

  private addHorizontalPlanes(point: Vector3) {
    // const uppedPoint = new Vector3(point.x, point.y + 0.1, point.z)

    // this._areaCutPlane = new EdgesPlane(
    //   this._components,
    //   uppedPoint,
    //   new Vector3(0, -1, 0),
    //   new MeshBasicMaterial({
    //     color: this.color,
    //     transparent: true,
    //     opacity: this._lineMaterial.opacity / 2
    //   }),
    //   new EdgesStyles(this._components)
    // )

    const plane = new PlaneGeometry(1000, 1000)

    plane.rotateX(Math.PI / 2)

    const material = new MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.1,
      side: DoubleSide
    })

    this._outterCastPlane = new Mesh(plane, material)
    this._outterCastPlane.position.set(point.x, point.y, point.z)
  }

  private continueArea() {
    if (this.closestVertex || this.cast) {
      const point = this._snapPointFixed ? this.closestVertex : this.cast?.point
      if (!point) {return}

      this._areaPoints.push(point)

      const checkCreateCoplanarPlane =
        !this._forceHorizontal &&
        this._areaPoints.length === 3 &&
        !this._outterCastPlane

      if (checkCreateCoplanarPlane) {
        this.addCoplanarPlane()
      }

      // switch to min-threshold calculation
      if (
        point.x === this._areaPoints[0].x &&
        point.y === this._areaPoints[0].y &&
        point.z === this._areaPoints[0].z &&
        this._areaPoints.length > 2
      ) {
        this.closeArea()
        return
      }

      this._tempLine = this.createDimension()

      if (this._tempLine) {this._areaLines.push(this._tempLine)}
    }
  }

  closeArea() {
    const line = this.createDimension(true)
    const area = this.getArea()
    if (!line || !this._root || !this._areaCenter || !area) {return}
    this._areaLines.push(line)

    //@ts-ignore
    this._perimeter += line._length

    this.cancelDrawing()

    for (let i = 0; i < this._areaPoints.length; i++) {
      if (i > 0) {
        this._perimeter += this._areaPoints[i - 1].distanceTo(
          this._areaPoints[i]
        )
      }
    }

    this._areaPoints.push(this._areaPoints[0])
    const perimeter = parseFloat(this._perimeter.toFixed(2))
    this._areaCutPlane?.dispose()

    this._areas[this._areas.length - 1] = {
      points: this._areaPoints,
      perimeter,
      area,
      color: this.color
    }

    if (this._outterCastPlane) this.removeFromScene(this._outterCastPlane)

    const tagPointPerimeter = new Vector3(
      this._areaPoints[0].x,
      this._areaPoints[0].y - 0.1,
      this._areaPoints[0].z
    )

    const perimeterTag = new SimpleTag(
      tagPointPerimeter,
      perimeter,
      'Perimeter'
    )

    const areaTag = new SimpleTag(this._areaCenter, area, 'Area m²')
    this._root.add(perimeterTag.get())
    this._root.add(areaTag.get())

    if (!this.hasVolumeCalculation) {
      this._isHovering = false
      this._areaPoints = []
    }

    return { perimeter, area }
  }

  private addCoplanarPlane() {
    const origin = this.cast?.point
    if (!origin) {return}
    const normal = new Vector3()
      .crossVectors(
        this._areaPoints[1].clone().sub(this._areaPoints[0]),
        this._areaPoints[2].clone().sub(this._areaPoints[0])
      )
      .normalize()

    if (
      (normal.y > normal.x && normal.y > normal.z) ||
      (normal.y < normal.x && normal.y < normal.z)
    ) {
      normal.negate()
    }

    this._outterCastNormal = normal

    // this._areaCutPlane = new EdgesPlane(
    //   this._components,
    //   origin,
    //   normal,
    //   new MeshBasicMaterial({
    //     color: this.color,
    //     transparent: true,
    //     opacity: this._lineMaterial.opacity / 2
    //   }),
    //   new EdgesStyles(this._components)
    // )

    const plane = new PlaneGeometry(100, 100)
    plane.lookAt(normal)

    const material = new MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.0001,
      side: DoubleSide
    })

    const meshPlane = new Mesh(plane, material)

    meshPlane.position.set(
      this._areaPoints[0].x,
      this._areaPoints[0].y,
      this._areaPoints[0].z
    )

    meshPlane.renderOrder = Number.MAX_SAFE_INTEGER
    this._outterCastPlane = meshPlane
  }

  update() {
    if (this._enabled) {
      //@ts-ignore
      this.beforeUpdate.trigger(this)

      if (!this.cast) return
      if (!this.closestVertex) return

      this._previewElement.visible = !!this.closestVertex && !!this.cast

      this._previewElement.position.set(
        this._snapPointFixed ? this.closestVertex.x : this.cast.point.x,
        this._snapPointFixed ? this.closestVertex.y : this.cast.point.y,
        this._snapPointFixed ? this.closestVertex.z : this.cast.point.z
      )

      const size = `${10 / this.cast.distance}rem`

      this._htmlPreview.style.width = size
      this._htmlPreview.style.height = size

      if (this._isHovering) this.drawing()
    }
  }

  private drawing() {
    if (!this.cast || !this.closestVertex) return

    if (this.hasVolumeCalculation && this._isHovering) {
      if (this._volumeMesh && this._volumeEdges) {
        this.removeFromScene(this._volumeMesh)
        this.removeFromScene(this._volumeEdges)
      }
      const depth = this.cast.point.y - this._areaPoints[0].y
      this.addVolumeMesh(depth)
      return
    }

    if (!this._tempLine && this.tempDimensionEnd()) {
      this._tempLine = this.createDimension()
      if (this._tempLine) {this._areaLines.push(this._tempLine)}
    } else if(this._tempLine) {
      const endPoint = this.tempDimensionEnd()
      if (endPoint) {this._tempLine.endPoint = endPoint}
    }
  }

  private createDimension(isClose = false) {
    const start = this._areaPoints[this._areaPoints.length - 1]
    const end = this.tempDimensionEnd(isClose)

    return end
      ? new SimpleDimensionLine(this._components, {
          start,
          end,
          endpoint: this.newEndpointMesh,
          lineMaterial: this._lineMaterial
        })
      : null
  }

  private tempDimensionEnd(isClose = false) {
    if (isClose) {
      return this._areaPoints[0]
    } else {
      if (!this.cast && !this.closestVertex) {return}
      if (!this._outterCastPlane) {return}

      if (this._snapPointFixed && this.closestVertex) {
        return this._forceHorizontal
          ? new Vector3(
              this.closestVertex.x,
              this._outterCastPlane.position.y,
              this.closestVertex.z
            )
          : this.closestVertex
      } else {
        if (this.cast) {
          return this._forceHorizontal
            ? new Vector3(
                this.cast.point.x,
                this._outterCastPlane.position.y,
                this.cast.point.z
              )
            : this.cast.point
        }
      }
    }
  }

  /** {@link Component.enabled} */
  get enabled() {
    return this._enabled
  }

  /** {@link Component.enabled} */
  set enabled(enabled) {
    this._enabled = enabled
    this.previewVisible = enabled
  }

  /** {@link Hideable.visible} */
  get visible() {
    return this._visible
  }

  /** {@link Hideable.visible} */
  set visible(visible) {
    for (const line of this._areaLines) {
      //@ts-ignore
      line._root.visible = visible
      line.label.visible = visible
      //@ts-ignore
      line._line.visible = visible
    }

    if (this._root) {
      for (const child of this._root.children) {
        child.visible = visible
      }
    }

    if (!visible) {
      this.enabled = false
    }

    this._visible = visible
  }

  get color() {
    return this._lineMaterial.color
  }

  /**
   * The [Color](https://threejs.org/docs/#api/en/math/Color)
   * of the geometry of the dimensions.
   */
  private set color(color: Color) {
    this.newEndpointMesh.material.color = color
    this._lineMaterial.color = color
  }

  get previewVisible() {
    if (this._previewElement.parent) { 
      return true 
    } else { 
      return false 
    }
  }

  set previewVisible(visible: boolean) {
    const scene = this._components.scene.get()
    if (visible) {
      scene.add(this._previewElement)
    } else {
      this._previewElement.removeFromParent()
    }
  }

  private get newEndpointMesh() {
    const geometry = new SphereGeometry(this._endPointSize)

    const material = new MeshBasicMaterial({
      color: this.color,
      depthTest: false,
      transparent: true,
      opacity: 0.5
    })

    return new Mesh(geometry, material)
  }

  private get closestVertex() {
    if (!this.cast) return

    let closestVertex = new Vector3()
    let vertexFound = false
    let closestDistance = Number.MAX_SAFE_INTEGER

    //@ts-ignore
    const vertices = SimpleDimensions.getVertices(this.cast)

    vertices === null || vertices === void 0
      ? void 0
      : vertices.forEach(vertex => {
          if (!vertex) {return}
          const distance = this.cast?.point.distanceTo(vertex)
          if (!distance) {return}
          if (distance > closestDistance || distance > this._snapDistance) {return}
          vertexFound = true
          closestVertex = vertex
          closestDistance = distance
        })

    return vertexFound ? closestVertex : this.cast.point
  }

  get forceHorizontal() {
    return this._forceHorizontal
  }

  set forceHorizontal(horizontal: boolean) {
    this._forceHorizontal = horizontal
  }

  get hasVolumeCalculation() {
    return this._hasVolumeCalculation
  }

  set hasVolumeCalculation(isVolumeCalculation: boolean) {
    this._hasVolumeCalculation = isVolumeCalculation
  }

  private getArea() {
    if (this._forceHorizontal) {
      return this.areaShape(this._areaPoints)
    } else {
      if (!this._outterCastNormal || !this._outterCastPlane) { return }
      const group = new Group()

      group.add(this._outterCastPlane)

      for (const point of this._areaPoints) {
        const mesh = new Mesh(
          new BoxGeometry(
            this._endPointSize,
            this._endPointSize,
            this._endPointSize
          ),
          new MeshBasicMaterial({
            color: '#f00'
          })
        )

        mesh.position.set(point.x, point.y, point.z)

        group.add(mesh)
      }

      const quaternion = new Quaternion()

      quaternion.setFromUnitVectors(
        this._outterCastNormal.clone(),
        new Vector3(0, 1, 0)
      )

      const euler = new Euler()
      euler.setFromQuaternion(quaternion)

      group.rotation.copy(euler)

      const points = []

      for (const child of group.children) {
        points.push(child.getWorldPosition(new Vector3()))
      }

      return this.areaShape(points)
    }
  }

  private areaShape(points: Vector3[]) {
    this._areaCenter = this.getAreaCenter(points)

    const area = ShapeUtils.area(
      points.map(p => {
        return {
          x: p.x,
          y: p.z
        }
      })
    )

    return area > 0 ? parseFloat(area.toFixed(2)) : parseFloat(`-${area.toFixed(2)}`)
  }

  private getAreaCenter(points: Vector3[]) {
    let centerPoint = new Vector3()

    for (const point of this._areaPoints) {
      centerPoint.add(point)
    }

    return centerPoint.divideScalar(points.length)
  }

  private addVolumeMesh(depth: number) {
    const shape = new Shape().setFromPoints(
      this._areaPoints.map(p => {
        return new Vector2(p.x, p.z)
      })
    )

    const extruded = new ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false
    })

    this._volumeMesh = new Mesh(
      extruded,
      new MeshBasicMaterial({
        color: this.color,
        transparent: true,
        opacity: 0.1,
        side: DoubleSide
      })
    )

    if (depth > 0) {
      this._volumeMesh.position.y = this._areaPoints[0].y + depth
    } else {
      this._volumeMesh.position.y = this._areaPoints[0].y - 0.25
    }

    this._volumeMesh.rotation.set(Math.PI / 2, 0, 0)
    this._volumeMesh.renderOrder = Number.MAX_SAFE_INTEGER
    this._components.scene.get().add(this._volumeMesh)

    const lines = new EdgesGeometry(this._volumeMesh.geometry)
    this._volumeEdges = new LineSegments(lines, this._lineMaterial)

    this._volumeEdges.rotation.set(Math.PI / 2, 0, 0)
    this._volumeEdges.position.y = this._areaPoints[0].y + depth
    this._volumeEdges.renderOrder = Number.MAX_SAFE_INTEGER
    this._components.scene.get().add(this._volumeEdges)
    const renderer = this._components.renderer

    if (renderer instanceof PostproductionRenderer) {
      renderer.postproduction.excludedItems.add(this._volumeMesh)
      renderer.postproduction.excludedItems.add(this._volumeEdges)
    }

    this.setHeightTag(depth)
  }

  getVolume() {
    const merged = mergeBufferGeometries([
      this._volumeMesh.geometry
    ])

    const volume = parseFloat(this.volumeCalculation(merged).toFixed(2))

    this._areas[this._areas.length - 1].volume = volume

    const volumeTag = new SimpleTag(this.volumeMeshCenter, volume, 'Volume m³')

    this._root?.add(volumeTag.get())

    this._isHovering = false
    this.cancelDrawing()
    this._areaPoints = []

    return volume
  }

  private volumeCalculation(geometry: BufferGeometry) {
    const triangleVolume = (p1: Vector3, p2: Vector3, p3: Vector3) => {
      return p1.dot(p2.cross(p3)) / 6.0
    }

    const position = geometry.attributes.position

    let volume = 0

    const p1 = new Vector3()
    const p2 = new Vector3()
    const p3 = new Vector3()

    const faces = position.count / 3

    for (let i = 0; i < faces; i++) {
      p1.fromBufferAttribute(position, i * 3 + 0)
      p2.fromBufferAttribute(position, i * 3 + 1)
      p3.fromBufferAttribute(position, i * 3 + 2)

      volume += triangleVolume(p1, p2, p3)
    }

    return volume
  }

  private setHeightTag(depth: number) {
    if (this._heightTag) {
      this._heightTag.get().position.y = this._areaPoints[0].y + depth / 2
      this._heightTag.tagContent = parseFloat(depth.toFixed(2))
    } else {
      const heightCenter = new Vector3(
        this._areaPoints[0].x,
        this._areaPoints[0].y + depth / 2,
        this._areaPoints[0].z
      )

      this._heightTag = new SimpleTag(
        heightCenter,
        parseFloat(depth.toFixed(2)),
        'Height m'
      )

      this._root?.add(this._heightTag.get())
    }
  }

  private get volumeMeshCenter() {
    const box = new Box3().setFromObject(this._volumeMesh)
    return box.getCenter(new Vector3())
  }

  private addToScene(item: Object3D) {
    this._components.scene.get().add(item)
  }

  private removeFromScene(item: Object3D) {
    this._components.scene.get().remove(item)
  }

  cancelDrawing() {
    if (!this._tempLine) {return}
    this._tempLine.dispose()
    this._areaCutPlane?.dispose()
    this._tempLine = null
    this._areaCutPlane = null
    this._volumeEdges = null
    this._outterCastPlane = null
    this._heightTag = null
    this._areaCenter = null
    this._outterCastNormal = null
  }

  /** {@link Disposable.dispose} */
  dispose() {
    this._visible = false
    this._enabled = false

    this._areaLines.forEach(a => a.dispose())

    for (const child of this._root?.children?? []) {
      this.removeFromScene(child)
    }

    if (this._root) {this.removeFromScene(this._root)}

    this._root = null
    this._areas = []
    this._areaPoints = []
    this._areaLines = []

    this._previewElement.removeFromParent()
    this._previewElement.element.remove()
  }
}
