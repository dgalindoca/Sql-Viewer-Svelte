<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
  
    let diagramText = `   erDiagram
      accTitle: My Entity Relationship Diagram
      accDescr: My Entity Relationship Diagram Description

      CUSTOMER ||--o{ ORDER : places
      ORDER ||--|{ LINE-ITEM : contains
      CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
      DELIVERY-ADDRESS }|..|{ TABLE1 : uses
      DELIVERY-ADDRESS }|..|{ TABLE2 : uses
      DELIVERY-ADDRESS }|..|{ TABLE3 : uses
      `;
  
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

    .viewer-container{
      background-color: lightblue;
    }
  </style>
  
  <div class="viewer-container">
    <div class="mermaid">{diagramText}</div>
  </div>
  