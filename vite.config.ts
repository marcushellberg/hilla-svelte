import { UserConfigFn } from "vite";
import { overrideVaadinConfig } from "./vite.generated";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const customConfig: UserConfigFn = (env) => ({
  plugins: [svelte()],
});

export default overrideVaadinConfig(customConfig);
