import {
  createPopper,
  Placement,
  Instance as PopperInstance,
  // @ts-ignore
} from "@popperjs/core/dist/esm";
import { Event } from "../../base-types/base-types";
import { Toolbar } from "../ToolbarComponent";
import { Components } from "../../core/Components";
import { SimpleUIComponent } from "../SimpleUIComponent";

interface IButtonOptions {
  materialIconName?: string;
  id?: string;
  name?: string;
  tooltip?: string;
  closeOnClick?: boolean;
}

export class Button extends SimpleUIComponent<HTMLButtonElement> {
  name: string = "TooeenButton";
  menu: Toolbar;

  onClicked = new Event<any>();

  static Class = {
    Base: `
    relative flex gap-x-2 items-center bg-transparent text-white rounded-[10px] 
    h-fit p-2 hover:cursor-pointer hover:bg-ifcjs-200 hover:text-black
    data-[active=true]:cursor-pointer data-[active=true]:bg-ifcjs-200 data-[active=true]:text-black
    disabled:cursor-default disabled:bg-gray-600 disabled:text-gray-400 pointer-events-auto
    transition-all
    `,
    Label: "text-sm tracking-[1.25px] whitespace-nowrap",
    Tooltip: `
    transition-opacity bg-ifcjs-100 text-sm text-gray-100 rounded-md 
    absolute left-1/2 -translate-x-1/2 -translate-y-12 opacity-0 mx-auto p-4 w-max h-4 flex items-center
    pointer-events-none
    `,
  };

  protected _parent: Toolbar | null = null;
  private _closeOnClick = true;
  private _popper: PopperInstance;

  set tooltip(value: string | null) {
    const element = this.innerElements.tooltip;
    element.textContent = value;
    if (value) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }

  get tooltip() {
    return this.innerElements.tooltip.textContent;
  }

  set label(value: string | null) {
    const element = this.innerElements.label;
    element.textContent = value;
    if (value) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }

  get label() {
    return this.innerElements.label.textContent;
  }

  set onclick(listener: (e?: MouseEvent) => void) {
    this.domElement.onclick = (e) => {
      e.stopImmediatePropagation();
      listener(e);
      if (this._closeOnClick) {
        this._components.ui.closeMenus();
        this._components.ui.contextMenu.visible = false;
      }
    };
  }

  set parent(toolbar: Toolbar | null) {
    this._parent = toolbar;
    if (toolbar) {
      this.menu.position = toolbar.position;
      this.updateMenuPlacement();
    }
  }

  get parent() {
    return this._parent;
  }

  set alignment(value: "start" | "center" | "end") {
    this.domElement.classList.remove(
      "justify-start",
      "justify-center",
      "justify-end"
    );
    this.domElement.classList.add(`justify-${value}`);
  }

  set materialIcon(name: string | null) {
    this.innerElements.icon.textContent = name;
    if (name) {
      this.innerElements.icon.classList.remove("hidden");
    } else {
      this.innerElements.icon.classList.add("hidden");
    }
  }

  get materialIcon() {
    return this.innerElements.icon.textContent;
  }

  innerElements: {
    icon: HTMLSpanElement;
    label: HTMLParagraphElement;
    tooltip: HTMLSpanElement;
  };

  constructor(components: Components, options?: IButtonOptions) {
    const template = `
    <button class="${Button.Class.Base}">
      <span id="icon" class="material-icons md-18"></span> 
      <span id="tooltip" class="${Button.Class.Tooltip}"></span> 
      <p id="label" class="${Button.Class.Label}"></p>
    </button>
    `;
    super(components, template);

    this.innerElements = {
      icon: this.getInnerElement("icon") as HTMLSpanElement,
      label: this.getInnerElement("label") as HTMLParagraphElement,
      tooltip: this.getInnerElement("tooltip") as HTMLSpanElement,
    };

    this.materialIcon = options?.materialIconName ?? null;
    this.label = options?.name ?? null;
    this.tooltip = options?.tooltip ?? null;
    this.alignment = "start";
    if (options?.closeOnClick !== undefined) {
      this._closeOnClick = options.closeOnClick;
    }

    this.domElement.onclick = (e) => {
      e.stopImmediatePropagation();
      if (!this.parent?.parent) {
        this._components.ui.closeMenus();
      }
      this.parent?.closeMenus();
      this.menu.visible = true;
      this._popper.update();
    };

    // this.domElement.addEventListener("mouseover", ({ target }) => {
    //   if (
    //     target !== this.get() &&
    //     target !== this.innerElements.icon &&
    //     target !== this.innerElements.label
    //   ) {
    //     return;
    //   }
    //   this.innerElements.tooltip.classList.add("opacity-100");
    // });

    // this.domElement.addEventListener("mouseleave", ({ target }) => {
    //   if (
    //     target !== this.get() &&
    //     target !== this.innerElements.icon &&
    //     target !== this.innerElements.label
    //   ) {
    //     return;
    //   }
    //   this.innerElements.tooltip.classList.add("opacity-0");
    // });

    // #region Extensible menu
    this.menu = new Toolbar(components);
    this.menu.visible = false;
    this.menu.parent = this;
    this.menu.setDirection("vertical");
    this.domElement.append(this.menu.domElement);
    this._popper = createPopper(this.domElement, this.menu.domElement, {
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, 15] },
        },
        {
          name: "preventOverflow",
          options: { boundary: this._components.ui.viewerContainer },
        },
      ],
    });
    // #endregion

    this.onEnabled.on(() => (this.domElement.disabled = false));
    this.onDisabled.on(() => (this.domElement.disabled = true));
  }

  dispose(onlyChildren = false) {
    this.menu.dispose();
    if (!onlyChildren) {
      this.domElement.remove();
    }
  }

  addChild(...button: Button[]) {
    this.menu.addChild(...button);
  }

  closeMenus() {
    this.menu.closeMenus();
    this.menu.visible = false;
  }

  private updateMenuPlacement() {
    let placement: Placement = "bottom";
    if (this.parent?.position === "bottom") {
      placement = this.parent?.parent ? "right" : "top";
    }
    if (this.parent?.position === "top") {
      placement = this.parent?.parent ? "right" : "bottom";
    }
    if (this.parent?.position === "left") {
      placement = "right";
    }
    if (this.parent?.position === "right") {
      placement = "left";
    }
    this._popper.setOptions({ placement });
  }
}
