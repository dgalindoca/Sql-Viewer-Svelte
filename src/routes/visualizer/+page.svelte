<script>
    import { onMount } from 'svelte';
    import SqlTextArea from '../../lib/components/SqlTextArea.svelte';
    import SqlViewer from '../../lib/components/SqlViewer.svelte';
    import {Container, Col, Row } from '@sveltestrap/sveltestrap';
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
    <Container>
      <Row>
        <Col>
          <SqlTextArea></SqlTextArea>
        </Col>
        <Col>
          <SqlViewer></SqlViewer>
        </Col>
      </Row>
    </Container>
  </main>
  