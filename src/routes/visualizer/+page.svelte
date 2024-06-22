<script>
    import { onMount } from 'svelte';
    import SqlViewer from '../../lib/components/SqlViewer.svelte';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'prismjs/components/prism-sql'; 
  
    let diagramText = '';
    let errorMessage = '';

    let code = `
    -- Escribe tu código SQL aquí...
    SELECT * FROM users WHERE active = 1;
  `;

    let preElement;

    function handleClick(event) {
	// 	try {
    //     const response = await fetch('https://tu-backend.com/api/diagrama', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ query: 'your-query-here' })
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     diagramText = data.diagramText;  // Asegúrate de que la API devuelva el texto del diagrama en este campo
    //   } catch (error) {
    //     errorMessage = `Error: ${error.message}`;
    //   }
	}
  
    onMount(async () => {
        Prism.highlightAllUnder(preElement);
    });

    function updateCode(event) {
    code = event.target.value;
    Prism.highlightAllUnder(preElement);
  }
  </script>
  
  <style>
    main {
      padding: 1rem;
    }


    .code-box {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 20px;
    position: relative;
    left: -10%;
    width: 50%;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    line-height: 1.5;
    white-space: pre;
    overflow: auto;
  }

  textarea {
    background-color: #2d2d2d;
    color: #f8f8f2;
    width: 100%;
    height: 300px;
    border: none;
    outline: none;
    resize: none;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    line-height: 1.5;
   
  }

  textarea::selection {
    background: #49483e;
  }
  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
  </style>
  
  <main>
    <h1>SQL Script Viewer</h1>
    <div class="code-box">
      <textarea bind:value={code} on:input={updateCode} spellcheck="false"></textarea>
      <button on:click={handleClick}>Visualizar</button>
    </div>
  </main>
  