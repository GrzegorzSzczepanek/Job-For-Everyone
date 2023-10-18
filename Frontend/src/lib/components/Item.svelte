<script>
	export let title;
    export let authors;
    export let categories;
    export let school;
    export let number_of_pages;
    
</script>

<article>
    <p>{title}</p>
    <p>{authors}</p>
    <p>{categories}</p>
    <p>{school}</p>
    <p>{number_of_pages}</p>
</article>

<style>
    article {
        background-color: #333;
        color: aliceblue;
        margin: 20px;
        width: 500px;
    }
</style>