<script>
	import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="app">
    <Navbar />
    
    <slot></slot>
    
    <Footer />
</div>

<style lang="scss">
    .app {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>