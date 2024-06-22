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
			<li>Julian Sanchez</li>
			<li>Daniel Bonilla</li>
			<li>Ricardo Veloza</li>
			<li>Daniel Galindo</li>
		</ul>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
