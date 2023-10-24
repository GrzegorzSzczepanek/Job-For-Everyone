<script>
	import { backend } from "$lib";
    import Fa from 'svelte-fa'
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
	import PopularPapers from "./Paper.svelte";

    export let position;

    let query = "";
    let searchResult = [];
    async function sendQuery() {
        searchResult = await backend.get("search", { query: query });
        console.log(searchResult)
    }
</script>

<form id="searchbar" style="position: {position};">
    <input type="text" name="search" id="search" bind:value={query} placeholder="Wyszukaj publikacje...">
    <button type="submit" id="icon" on:click={sendQuery}>
        <Fa icon={faMagnifyingGlass} on:click={sendQuery} size="1.4x" color="#8f9a9c"/>
    </button>
</form>

{#each searchResult as paper}
    <PopularPapers {...paper}/>
{/each}

<style lang="scss">
    #searchbar {
        width: 600px;
        position: relative;

        input {
            width: 100%;
            border: none;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            border-radius: 30px;
            text-align: left;
            color: #f9f1ff;
            font-size: 18px;
            padding: 10px 15px;
            font-family: "DM Sans";
            box-shadow: none;
            transition: box-shadow 0.3s;

            &:focus {
                outline: none;
                -webkit-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                -moz-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
            }
        }

        #icon {
            position: relative;
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }

</style>
