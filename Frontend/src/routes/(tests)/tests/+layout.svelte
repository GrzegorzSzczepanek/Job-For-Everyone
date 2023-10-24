<!-- layout for single article -->

<script>
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
// import PublicationOnProfile from "$lib/components/PublicationOnProfile.svelte";
// import Searchbar from "$lib/components/Searchbar.svelte";
// import Paper from "$lib/components/Paper.svelte";

// Placeholders for now

let index = 0;

function iterate_index() {
    index += 1;
    return index;
}

</script>
<div class="app">
    <Navbar />

    <Footer />
</div>



<style lang="scss">
    .app {
        max-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: #303133;
    }

    #index {
        margin-right: 20px;
        font-size: 20px;
        color: #dcd6d6;
    }
</style>