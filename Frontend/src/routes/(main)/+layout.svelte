<script>
	import Footer from "$lib/components/Footer.svelte";
	import NavMenu from "$lib/components/NavMenu.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="app">
    <Navbar />
    <NavMenu />
    <slot></slot>
    
    <Footer />
</div>

<style lang="scss">
    .app {
        width: 100vw;
        max-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>