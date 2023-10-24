<script>
	import Fa from 'svelte-fa';
    import { faBook } from '@fortawesome/free-solid-svg-icons'
    import { backend } from '$lib';

    export let id;
    export let title;
    export let authors;
    export let file;
    // export let categories;
    // export let number_of_pages;

    async function goToArticle() {
        let result = await backend.get("publication", { id: id });
        console.log(result)
    }

</script>

<div class="trending">
    <article on:click={goToArticle}>
        <div>
            <Fa icon={faBook} size="3x", color="#dcd6d6"/>
        </div>
        <div>
            <h3>{title}</h3>
            <!-- <p>Author(s): {authors.join(", ")}</p> -->
            <p>Autor:</p>

        </div>
    </article>

</div>

<style>
    div {
        margin-right: 20px;
    }
    article {
        color: #dcd6d6;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>