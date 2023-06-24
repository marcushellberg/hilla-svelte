<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
  import hillaLogo from './assets/hilla.png'
  import HillaExample from './HillaExample.svelte';
</script>

<main class="">
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://hilla.dev/" target="_blank">
      <img src={hillaLogo} class="logo hilla" alt="Hilla logo" />
    </a>
  </div>
  <h1>Vite + Svelte + Hilla</h1>

  <HillaExample/>

  <p>
    Check out <a href="https://hilla.dev" target="_blank" rel="noreferrer">Hilla</a>, type-safe full-stack framework for Java!
  </p>

  <p class="read-the-docs">
    Click on the Vite, Svelte, and Hilla logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
