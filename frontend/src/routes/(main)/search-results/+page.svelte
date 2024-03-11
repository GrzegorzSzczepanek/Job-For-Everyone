<script lang="ts">
	import { backend, searchResult } from "$lib";
	import Offer from "$lib/components/Offer.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";

    const props = {
        query: "",
        job_title: "",
        category: "",
        location: "",
        disability: ""
    }

    let offers = searchResult;

    function onType(event) {
        console.log(event.detail);
        props.query = event.detail;
    }

    async function sendQuery() {
        console.log(props);
        offers = await backend.get("search", "dawid", props);
        console.log(offers);
    }
</script>

<main>
<section id="search">
    <Searchbar on:onType={onType} on:submit={sendQuery} />
</section>
<section id="filters">
    <h2>Kategoria</h2>
    <input type="text" placeholder="Kategoria" bind:value={props.category}>
    <h2>Lokalizacja</h2>
    <input type="text" placeholder="Lokalizacja" bind:value={props.location}>
    <h2>Niepełnosprawności</h2>
    <input type="text" placeholder="Niepełnosprawności" bind:value={props.disability}>

    <button type="submit" on:click={sendQuery}>Zastosuj</button>
</section>
<section id="offers">
    {#each offers as offer}
    <article>
        <Offer {...offer}/>
    </article>
    {/each}

</section>
</main>

<style lang="scss">
    main {
        background: $primary;
        position: relative;
        flex-grow: 1;
        display: grid;
        grid-template-areas:
                "search search search"
                "filter offer offer"
                "filter offer offer";
        grid-template-columns: 0.25fr 0.75fr;
        grid-auto-rows: max-content;
    }

    #search {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        grid-area: search;
        width: 100%;
        margin: 40px 0;
    }

    #offers {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding: 30px 20px;
    }

    #filters {
        padding: 0 20px;
        color: white;
        display: flex;
        flex-direction: column;

        input, button[type=submit] {
            border-radius: 20px;
            border: none;
            padding: 10px 15px;
            background: linear-gradient(#303133, #303133) padding-box, linear-gradient(90deg, #ed6e61, #6359e1) border-box;
            border: 4px solid transparent;
            color: white;
        }

        button[type=submit] {
            margin-top: 40px;
            padding: 5px 0;
            cursor: pointer;
        }
    }
</style>
