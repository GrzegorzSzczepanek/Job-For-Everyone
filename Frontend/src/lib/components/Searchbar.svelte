<script>
	import Item from "./Item.svelte";


let query = "";
let dataReceived = [];

async function sendQueri() {
    let promise = await fetch("http://127.0.0.1:3000/search", {query: query});
    dataReceived = await promise.json();
    // console.log(dataReceived)
    
}

</script>

<input type="text" name="search" id="search" bind:value={query}>
<button type="submit" on:click={sendQueri}>lupka</button>

{#each dataReceived as paper}
    <Item {...paper}/>
{/each}

<style>

</style>