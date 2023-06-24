import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

console.log('************************HERE')

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
}
