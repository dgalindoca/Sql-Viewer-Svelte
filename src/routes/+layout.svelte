<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<slot />

	<footer>
		<p>Desarrollado por:</p>
		<ul>
			<li><a href="#">Julian Sanchez</a></li>
			<li><a href="#">Daniel Bonilla</a></li>
			<li><a href="#">Ricardo Veloza</a></li>
			<li><a href="#">Daniel Galindo</a></li>
		</ul>
		<div class="social-icons">
			<a href="#"><i class="fab fa-twitter"></i></a>
			<a href="#"><i class="fab fa-linkedin"></i></a>
			<a href="#"><i class="fab fa-github"></i></a>
		</div>
	</footer>
</div>

<style>
	/* Agrega estos estilos a tu archivo styles.css */
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

	body {
		margin: 0;
		font-family: 'Roboto', sans-serif;
		background-color: #f0f4f8;
		color: #333;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		background-color: #2c3e50;
		color: #ecf0f1;
		padding: 40px 20px;
		margin-top: auto;
		text-align: center;
		border-top: 3px solid #2980b9;
		box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	footer p {
		margin: 0;
		font-size: 1.5em;
		font-weight: bold;
	}

	footer ul {
		list-style-type: none;
		padding: 0;
		margin: 20px 0 30px 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	footer ul li {
		margin: 0 20px;
		font-size: 1.2em;
	}

	footer ul li a {
		color: #ecf0f1;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s;
	}

	footer ul li a:hover {
		color: #3498db;
	}

	.social-icons {
		margin-top: 20px;
	}

	.social-icons a {
		color: #ecf0f1;
		font-size: 1.5em;
		margin: 0 10px;
		transition: color 0.3s;
	}

	.social-icons a:hover {
		color: #3498db;
	}

	@media (max-width: 480px) {
		footer ul {
			flex-direction: column;
		}

		footer ul li {
			margin: 10px 0;
		}
	}
</style>
