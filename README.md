# Example app using Hilla 2 and Svelte 4

Note: two-way binding does not work with custom elements like the Vaadin components (https://github.com/sveltejs/svelte/issues/4838).
For proper support, we would need to create Svelte wrappers.

Notes:
- The `tsconfig.json` is a quick merge of the Hilla and Vite+Svelte configs - it could probably be simplified a lot.
- TypeScript does not work in Svelte components. `svelte.config.js` is not getting picked up for some reason

## Requirements
- Java 17+

## Running the app
Run the app by running `Application.java` or with the default Maven goal:

```
mvn
```