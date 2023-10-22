<script>
	import Footer from "$lib/components/Footer.svelte";
	import MainSiteNav from "$lib/components/MainSiteNav.svelte";
import PublicationOnProfile from "$lib/components/PublicationOnProfile.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";
import UserIcon from "$lib/components/UserIcon.svelte";
import PopularPapers from "$lib/components/PopularPapers.svelte";


</script>


<div class="app">
    <MainSiteNav />
    <slot></slot>
	<Searchbar />
    <section>
        <h2>
            Publikacje zyskujące popularność
        </h2>
        <PopularPapers />
    </section>

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
        background: #303133;
    }
    section h2{
        color: #dcd6d6;
        font-size: 26px;
        text-align: center;
        margin-top: 100px;
    }
</style>