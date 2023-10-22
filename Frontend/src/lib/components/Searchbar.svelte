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

<div id="searchbar">
    <input type="text" name="search" id="search" bind:value={query} placeholder="Wyszukaj publikacje... " >
        <span id="icon" on:click={sendQuery}>
            <Fa icon={faMagnifyingGlass} on:click={sendQuery} size="1.6x" color="#8f9a9c"/>
        </span>
</div>

{#each searchResult as paper}
    <Item {...paper}/>
{/each}

<style lang="scss">
    #searchbar {
        width: 65%;
        position: relative;
    }
    #searchbar #icon{
        position: absolute;
        right: 24px;
        top: 18px;
        
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
        border: 4px solid transparent;
        border-radius: 30px;
        text-align: left;
        color: #f9f1ff;
        font-weight: bold;
        font-size: 25px;
        padding: 10px;
        font-family: "DM Sans";
    }
    input::placeholder {
        font-weight: 600;
        font-size: 25px;
        color: #8f9a9c;
        display: flex;
        padding: 0px;
    }
    ::-webkit-input-placeholder {
        text-align: left;
        
    }

    :-moz-placeholder {
        text-align: left;
    }

</style>
