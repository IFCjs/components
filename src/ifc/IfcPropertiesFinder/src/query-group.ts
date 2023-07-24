import { Components } from "../../../core/Components";
import { SimpleUIComponent } from "../../../ui/SimpleUIComponent";
import { Button } from "../../../ui/ButtonComponent";
import { AttributeQueryUI } from "./attribute-query";
import { QueryGroup, AttributeQuery, QueryOperators } from "./types";
import { Dropdown } from "../../../ui";

export class QueryGroupUI extends SimpleUIComponent {
  operator: Dropdown;
  removeBtn: Button;

  get query() {
    const queriesMap = this.children.map((child) => {
      if (!(child instanceof AttributeQueryUI)) return null;
      return child.query;
    });
    const queries = queriesMap.filter(
      (query) => query !== null
    ) as AttributeQuery[];
    const query: QueryGroup = { queries };
    if (this.operator.visible)
      query.operator = this.operator.inputValue as QueryOperators;
    return query;
  }

  set query(value: QueryGroup) {
    if (value.operator) this.operator.inputValue = value.operator;
    for (const child of this.children) {
      if (!(child instanceof AttributeQueryUI)) continue;
      this.removeChild(child);
      child.dispose();
    }
    for (const [index, query] of value.queries.entries()) {
      // @ts-ignore
      if (!query.condition) continue;
      const attributeQuery = query as AttributeQuery;
      if (index === 0 && attributeQuery.operator)
        delete attributeQuery.operator;
      const attributeQueryUI = new AttributeQueryUI(this._components);
      attributeQueryUI.query = attributeQuery;
      this.addChild(attributeQueryUI);
    }
  }

  constructor(components: Components) {
    const div = document.createElement("div");
    div.className =
      "flex flex-col gap-y-3 p-3 border border-solid border-ifcjs-120 rounded-md";
    super(components, div);

    this.operator = new Dropdown(components);
    this.operator.visible = false;
    this.operator.label = null;
    this.operator.addOption("AND", "OR");

    const topContainerDiv = document.createElement("div");
    const topContainer = new SimpleUIComponent(components, topContainerDiv);
    topContainer.get().classList.add("flex", "gap-x-2", "w-fit", "ml-auto");

    const newRuleBtn = new Button(components, { materialIconName: "add" });
    newRuleBtn.get().classList.add("w-fit");
    newRuleBtn.label = "Add Rule";

    newRuleBtn.onclick = () => {
      const propertyQuery = new AttributeQueryUI(components);
      propertyQuery.operator.visible = true;
      propertyQuery.operator.inputValue = propertyQuery.operator.options[0];
      propertyQuery.removeBtn.visible = true;
      this.addChild(propertyQuery);
    };

    const newGroupBtn = new Button(components, { materialIconName: "add" });
    newGroupBtn.get().classList.add("w-fit");
    newGroupBtn.label = "Add Group";

    this.removeBtn = new Button(components, { materialIconName: "delete" });
    this.removeBtn.label = "Delete Group";
    this.removeBtn.visible = false;
    this.removeBtn.onclick = () => {
      if (this.parent instanceof SimpleUIComponent)
        this.parent.removeChild(this);
      this.dispose();
    };

    topContainer.addChild(newRuleBtn, this.removeBtn);

    const propertyQuery = new AttributeQueryUI(components);

    this.addChild(topContainer, this.operator, propertyQuery);
  }
}
