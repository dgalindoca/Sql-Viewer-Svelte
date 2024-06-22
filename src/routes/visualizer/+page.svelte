<script>
    import { onMount } from 'svelte';
    import SqlViewer from '../../lib/components/SqlViewer.svelte';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'prismjs/components/prism-sql'; 
  
    let diagramText = '';
    let errorMessage = '';

    let code = `
        // Escribe tu código aquí...
        function greet() {
        console.log('Hello, world!');
        }
        greet();
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

    .error {
      color: red;
    }

    .code-box {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 20px;
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
  </style>
  
  <main>
    <h1>Sql Script Viewer</h1>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
    {#if diagramText}
      <SqlViewer {diagramText} />
    {/if}
    <div class="code-box">
        <textarea bind:value={code} on:input={updateCode}></textarea>
        <pre class="language-sql" bind:this={preElement}>
          <code class="language-sql">{code}</code>
            <button on:click={handleClick}>Visualizar</button>
        </pre>
      </div>
  </main>
  