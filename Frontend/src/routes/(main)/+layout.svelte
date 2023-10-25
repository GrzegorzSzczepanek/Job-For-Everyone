<script>
	import Footer from "$lib/components/Footer.svelte";
	import NavWithSearchBar from "$lib/components/NavWithSearchBar.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
</script>


<div class="app">
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>

<style lang="scss">
    .app {
        overflow: hidden;
        max-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: #232325;

        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-grow: 1;
        }
    }
</style>