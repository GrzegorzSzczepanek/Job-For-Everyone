<script>
	import { backend } from "$lib";
	import Item from "./Item.svelte";


let query = "";
let searchResult = [];

async function sendQuery() {
    searchResult = await backend.get("search", { query: query });
}

</script>

<input type="text" name="search" id="search" bind:value={query}>
<button type="submit" on:click={sendQuery}>lupka</button>

{#each searchResult as paper}
    <Item {...paper}/>
{/each}

<style>

</style>