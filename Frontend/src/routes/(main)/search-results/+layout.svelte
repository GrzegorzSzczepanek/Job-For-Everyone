<script>
	import Searchbar from "$lib/components/Searchbar.svelte";
	import { search_result } from "$lib";
	import SearchedPaper from "$lib/components/SearchedPaper.svelte";
	import Filters from "$lib/components/Filters.svelte";
	import NavWithSearchBar from "$lib/components/NavWithSearchBar.svelte";

	console.log(search_result)

	// ToDo left
	
</script>

<NavWithSearchBar />

<div id="main_container">
	<section id="filters">
		<Filters />
	</section>
	<section id="found_papers">
		{#each search_result as result }
			
		<SearchedPaper {...result} />
		<!-- <SearchedPaper {...result} /> -->
		
		{/each}
	
	</section>
	<section id="some_info">
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quibusdam eos vero optio sequi aperiam id iure dolorem explicabo, neque at! Officia soluta eos praesentium cupiditate! Totam consectetur corrupti sequi!
		</p>
	</section>
</div>


<style>

	#filters {
        display: flex;
		justify-content: center;
		align-self: top;
	}
	#some_info {
		display: flex;
		align-items: center;
		text-align: left;
		width: 75%;
		height: max-content;
		background-color: #303030;
		color: aliceblue;
		border-radius: 30px;
        -webkit-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        -moz-box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
        box-shadow: 0px 13px 7px 5px rgba(32, 32, 35, 1);
	}
	#some_info p {
		margin: 30px;

	}
	#main_container {
		margin-top: 130px;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 0.2fr 0.6fr 0.2fr;
		justify-content: center;
	}

	#found_papers {
		display: flex;
		flex-direction: column;
		justify-content: start ;
		grid-column: 2;
	}

</style>