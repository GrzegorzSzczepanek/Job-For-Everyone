<script>
	import { backend } from "$lib";
    import Fa from 'svelte-fa'
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
    import {  setSearchResult } from "$lib";
	import { goto } from "$app/navigation";
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let query = "";

    function onType(event) {
        dispatch('onType', query);
    }

    function submit() {
        dispatch('submit', query);
    }

    let searchResult = [];
    async function sendQuery() {
        if (query.length == 0) {
            return
        }
        searchResult = []
        searchResult = await backend.get("search", "dawid", { query: query });
        setSearchResult(searchResult);
        submit();
        if (searchResult.length > 0) {
            goto("/search-results")
        }
        else {
            alert("Nie znaleziono oferty dla podanych kryteriów")
        }
    }
</script>

<form id="searchbar" >
    <input type="text" name="search" id="search" on:input={onType} bind:value={query} placeholder="Stanowisko, firma, słowa kluczowe, ...">
    <button type="submit" id="icon" on:click={sendQuery}>
        <Fa icon={faMagnifyingGlass} on:click={sendQuery} size="1.4x" color="#8f9a9c"/>
    </button>
</form>

<style lang="scss">
    #searchbar {
        width: 700px;
        position: relative;

        input {
            width: 100%;
            border: none;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 5px solid transparent;
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
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            background: transparent;
            border: none;
        }
    }
    .search_navbar {
        position: absolute;
    }
</style>
