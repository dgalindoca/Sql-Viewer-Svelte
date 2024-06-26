<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
  
    export let showExtended; 
    export let diagramText;
    export let errorMessage;
    
    function toggleStyle() {
        showExtended = !showExtended;
    }
  
    onMount(() => {
      if (errorMessage == '' && diagramText != ''){
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
      }
    });
  
    $: if (diagramText != '') {
      mermaid.contentLoaded();
    }
  </script>
  
  <style>
.viewer-container {
     background-color: rgba(31, 30, 65, 0.7);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      margin: 20px auto;
      max-width: 70%;
    }
  
    .mermaid {
      background-color: #E3F2FD; /* Fondo oscuro para el diagrama */
      color: #f8f9fa; /* Texto claro */
      padding: 15px;
      border-radius: 8px;
      overflow-x: auto;
    }
  
    button {
        position: relative;
        bottom: -10px;
        right: 20px;
        left: 400px;
        padding: 10px 20px;
        background-color: #322981;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
  
    button:hover {
        background-color: #524375;
    }
    
  </style>
  
  <div class="viewer-container">
    <div class="mermaid">
      {#if errorMessage == '' && diagramText != ''}
        {diagramText}
      {:else}
        {errorMessage}
      {/if}
    </div>
    <button on:click={toggleStyle}>
      Ocultar
    </button>
  </div>
  