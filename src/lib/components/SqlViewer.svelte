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
    .mermaid {
      margin-top: 20px;
    }

    .viewer-container {
  background-color: #E3F2FD;
  border: 1px solid #BBDEFB;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 32%;
  left: 50%;
  width: 45%;
  height: 69%;
  border-radius: 12px;
  overflow: scroll;
}

    .button2{
      position: absolute;
    bottom: 20px;
    right: 20px;
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
    {#if !showExtended}
    <button class="button2" on:click={toggleStyle}>
      Expandir
    </button>
    {/if}
  </div>
  