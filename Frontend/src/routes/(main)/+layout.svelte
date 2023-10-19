<script>
	import Searchbar from "$lib/components/Searchbar.svelte";

</script>
<nav>
    <Searchbar />
</nav>

<slot></slot>

<footer>
    Made By: Gwiezdna flota
</footer>

<style lang="scss">
    nav {
        width: 100%;
    }

    footer {
        width: 100%;
    }
</style>