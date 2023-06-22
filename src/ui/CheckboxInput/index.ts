import { Components } from "../../core";
import { BaseInput } from "../BaseInput";

export class CheckboxInput extends BaseInput<HTMLInputElement> {
  name = "TooeenCheckboxInput";

  constructor(components: Components) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className =
      "h-4 w-4 rounded border-gray-300 text-ifcjs-200 focus:ring-ifcjs-200";
    super(components, input);
    this.labelElement.textContent = "Tooeen Checkbox";
    this.wrapperElement.classList.remove("flex-col", "w-full");
    this.wrapperElement.classList.add(
      "items-center",
      "flex-row-reverse",
      "justify-end",
      "gap-x-1"
    );
  }

  // @ts-ignore
  set inputValue(value: boolean) {
    this.inputElement.checked = value;
  }

  // @ts-ignore
  get inputValue() {
    return this.inputElement.checked;
  }
}
