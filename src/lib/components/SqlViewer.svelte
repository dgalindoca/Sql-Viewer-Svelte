<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
  
    export let diagramText = '';
  
    onMount(() => {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    });
  
    $: if (diagramText) {
      mermaid.contentLoaded();
    }
  </script>
  
  <style>
    .mermaid {
      margin-top: 20px;
    }
  </style>
  
  <p>Prueba</p>
  <div class="mermaid">{diagramText}</div>
  