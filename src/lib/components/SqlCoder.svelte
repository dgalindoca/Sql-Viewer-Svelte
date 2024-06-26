<script>
    import { onMount } from 'svelte';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'prismjs/components/prism-sql'; 

    export let diagramText = '';
    export let errorMessage = '';

    let code = `
    -- Escribe tu código SQL aquí...
    SELECT * FROM users WHERE active = 1;
  `;

    let preElement;

    async function handleClick(event) {
      code = code.replace(/[\r\n]+/gm, "");
		  try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/visualizerSql/parse`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
          },
          body: JSON.stringify(code)
        });
  
        if (!response.ok) {
          errorMessage = await response.json();
          errorMessage = errorMessage.response;
          return;
        }
        diagramText = await response.json();
        diagramText = diagramText.response;
        console.log('diagramText :>> ', diagramText);
      } catch (error) {
        errorMessage = `Error: ${error.message}`;
      }
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

    .code-box {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 20px;
    position: relative;
    left: 5%;
    width: 40%;
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
    height: 330px;
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
  
  <div class="code-box">
    <textarea bind:value={code} on:input={updateCode} spellcheck="false"></textarea>
    <button on:click={handleClick}>Visualizar</button>
</div>
  