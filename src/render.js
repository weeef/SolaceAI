import { createElement } from "react";

export function render(component, data) {
  const element = createElement(component, null, data);
  document.getElementById("root").appendChild(element);
}
