import App from "./App.svelte";

import "./app.css";
// Init Vaadin Lumo styling
import { color, typography } from "@vaadin/vaadin-lumo-styles/all-imports.js";

const style = document.createElement("style");
style.innerHTML = `${color.toString()} ${typography.toString()}`;

document.head.appendChild(style);

const app = new App({
  target: document.getElementById("app")!,
});
