<script>
	import PopularPapers from "$lib/components/PopularPapers.svelte";
	import Searchbar from "$lib/components/Searchbar.svelte";

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
		}
	]   
	let index = 0;

	function iterate_index() {
		index += 1;
		return index;
	}

</script>
<h1>
	Otwarty dostep do wiedzy akademickiej.
</h1>

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

<style>
	h1 {
		color: #dcd6d6 ;
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