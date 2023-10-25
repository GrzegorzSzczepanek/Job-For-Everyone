<script>
	import Searchbar from "$lib/components/Searchbar.svelte";
	import { search_result } from "$lib";
	import SearchedPaper from "$lib/components/SearchedPaper.svelte";

	console.log(search_result)

	// ToDo left

</script>

<!-- <Searchbar position="absolute"/> -->

<div id="main_container">
	<section id="filters">
		
	</section>
	<section id="found_papers">
		{#each search_result as result }
			
		<SearchedPaper {...result} />
		<!-- <SearchedPaper {...result} /> -->
		
		{/each}
	
	</section>
	<section id="">

	</section>
</div>


<style>

#main_container {
	margin-top: 30px;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 0.2fr 0.6fr 0.2fr;
}

#found_papers {
	display: flex;
	flex-direction: column;
	justify-content: center;
	grid-column: 2;
}

</style>