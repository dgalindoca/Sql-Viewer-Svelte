<script>
    import { onMount } from 'svelte';
    import SqlCoder from '../../lib/components/SqlCoder.svelte';
    import SqlViewer from '../../lib/components/SqlViewer.svelte';
    import SqlViewerExtended from '../../lib/components/SqlViewerExtended.svelte';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'prismjs/components/prism-sql'; 
  
    let showExtended = false;
    let diagramText = '';
    let errorMessage = '';
  
    onMount(async () => {
        
    });
  </script>
  
  <style>
    main {
      padding: 1rem;
    }

  </style>
  
  <main>
    <h1 style="color:black">SQL Script Viewer</h1>
    <SqlCoder
    bind:diagramText = {diagramText}
    bind:errorMessage = {errorMessage}
    ></SqlCoder>
    {#key diagramText}
      <SqlViewer
      bind:showExtended = {showExtended}
      bind:diagramText = {diagramText}
      bind:errorMessage = {errorMessage}
      ></SqlViewer>
    {/key}
    <!-- Componente expandido -->
    {#if showExtended}
      <SqlViewerExtended
      bind:showExtended = {showExtended}
      bind:diagramText = {diagramText}
      bind:errorMessage = {errorMessage}
      ></SqlViewerExtended>
    {/if}
  </main>
  