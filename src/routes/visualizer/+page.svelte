<script>
    import { onMount } from 'svelte';
    import SqlCoder from '../../lib/components/SqlCoder.svelte';
    import SqlViewer from '../../lib/components/SqlViewer.svelte';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'prismjs/components/prism-sql'; 
  
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
    ></SqlViewer>
  </main>
  