<script>

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="landing-page">
    <div class="title">Bienvenido a SQL Visualizer</div>
    <div class="subtitle">Transformando el Código SQL en Diagramas Entidad-Relación</div>
  
    <div class="section">
        <p>
            En SQL Visualizer, creemos que la comprensión del diseño de bases de datos es esencial para cualquier estudiante y profesional del mundo de la tecnología. Nuestra herramienta convierte el código SQL en diagramas entidad-relación (ERD) de manera intuitiva y visual, facilitando el aprendizaje y la enseñanza de conceptos complejos de bases de datos.
        </p>
    </div>
  
    <div class="section">
        <div class="section-title">Nuestra Misión</div>
        <p>
            Nuestra misión es simplificar la manera en que las personas aprenden sobre bases de datos relacionales y sus estructuras. Con SQL Visualizer, puedes transformar tus scripts SQL en diagramas visuales que representan claramente las entidades y las relaciones dentro de una base de datos. Esto no solo mejora la comprensión, sino que también hace que el proceso de enseñanza sea más interactivo y atractivo.
        </p>
    </div>
</div>

<style>
    body {
        background-color: #f0f4f8;
        font-family: 'Roboto', sans-serif;
        color: #333;
        margin: 0;
        padding: 0;
    }

    .landing-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .title {
        font-size: 2.5em;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 10px;
        text-align: center;
    }

    .subtitle {
        font-size: 1.75em;
        color: #34495e;
        margin-bottom: 30px;
        text-align: center;
    }

    .section {
        margin-bottom: 30px;
    }

    .section-title {
        font-size: 2em;
        font-weight: 600; 
        color: #2980b9;
        margin-bottom: 15px;
        position: relative;
        
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
        color: #7f8c8d;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 2em;
        }

        .subtitle {
            font-size: 1.5em;
        }

        .section-title {
            font-size: 1.75em;
        }

        p {
            font-size: 1em;
        }
    }
</style>

