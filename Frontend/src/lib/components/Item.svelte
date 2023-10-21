<script>
	export let title;
    export let authors;
    export let categories;
    export let number_of_pages;
    export let file;
</script>

<article>
    <p>{title}</p>
    <p>{authors}</p>
    <p>{categories}</p>
    <p>{number_of_pages}</p>
    <p>{file}</p>
</article>

<style>
    article {
        background-color: #333;
        color: aliceblue;
        margin: 20px;
        width: 500px;
    }
</style>
