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
    ></SqlCoder>
    <SqlViewer
    bind:diagramText = {diagramText}
    bind:showExtended = {showExtended}
    ></SqlViewer>
    <!-- Componente expandido -->
    {#if showExtended}
      <SqlViewerExtended
      bind:diagramText = {diagramText}
      bind:showExtended = {showExtended}
      ></SqlViewerExtended>
    {/if}
  </main>
  