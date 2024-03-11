<script lang="ts">
	import { backend } from "$lib";
	import Searchbar from "$lib/components/Searchbar.svelte";
</script>

<main>
	<h1 style="font-size: 32px;">Wyszukiwarka prac dla osób niepełnosprawnych</h1>
	<Searchbar />
</main>

<style lang="scss">
	main {
		position: relative;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: url("/src/lib/assets/background.jpg");
		background-size: cover;
		background-position: center;

		h1 {
			font-size: 48px;
			margin-top: 0;
			color: white;
		}
	}
</style>
