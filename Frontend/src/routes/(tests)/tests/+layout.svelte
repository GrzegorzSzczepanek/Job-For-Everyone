<script>
	import Footer from "$lib/components/Footer.svelte";
	import MainSiteNav from "$lib/components/MainSiteNav.svelte";
import PublicationOnProfile from "$lib/components/PublicationOnProfile.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";
import UserIcon from "$lib/components/UserIcon.svelte";
import PopularPapers from "$lib/components/Paper.svelte";

// Placeholders for now
let popular_papers = [
    {
        title:"Language Models are Few-Shot Learners",
        authors: ["Tom B. Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan"]
    },
    {
        title:"Language Models are Few-Shot Learners",
        authors: ["Tom B. Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan"]
    },
    {
        title:"Language Models are Few-Shot Learners",
        authors: ["Tom B. Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan"]
    },
    {
        title:"Language Models are Few-Shot Learners",
        authors: ["Tom B. Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan"]
    }
]   
let index = 0;

function iterate_index() {
    index += 1;
    return index;
}

</script>


<div class="app" on:click{}>
    <MainSiteNav />
    <slot></slot>
	<Searchbar />
    <section>
        <h2>
            Publikacje zyskujące popularność
        </h2>
        <ol>
            {#each popular_papers as paper}
               <li>
                <p id="index">{iterate_index()}. </p>
                <PopularPapers {...paper}/>
                </li>
            {/each}
        </ol>
        

        <!-- <PopularPapers /> -->
    </section>

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
    section h2{
        color: #dcd6d6;
        font-size: 26px;
        text-align: center;
        margin-top: 100px;
    }
    ol{
        list-style: none;
    }
    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #index {
        margin-right: 20px;
        font-size: 20px;
        color: #dcd6d6;
    }
</style>