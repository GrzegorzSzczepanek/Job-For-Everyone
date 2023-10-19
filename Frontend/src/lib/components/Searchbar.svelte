<script>
	import { backend } from "$lib";
	import Item from "./Item.svelte";
    import Fa from 'svelte-fa'
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

    let query = "";
    let searchResult = [];

    async function sendQuery() {
        searchResult = await backend.get("search", { query: query });
    }

</script>

<div class="searchbar">
    <input type="text" name="search" id="search" bind:value={query}>
    <button type="submit" on:click={sendQuery}><Fa icon={faMagnifyingGlass} color="#222" /></button>
</div>

{#each searchResult as paper}
    <Item {...paper}/>
{/each}

<style lang="scss">

</style>