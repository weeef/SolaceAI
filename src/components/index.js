import { render } from "../render.js";

export function IndexComponent(data) {
  const element = document.createElement("div");
  element.innerHTML = `
    <h1>Welcome to SolaceAI!</h1>
    <button onclick="startOnboarding()">Let's Begin</button>
  `;
  return element;
}
