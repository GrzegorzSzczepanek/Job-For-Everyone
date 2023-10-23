<script>
	import PublicationOnProfile from "$lib/components/PublicationOnProfile.svelte";
	import UserIntroduction from "$lib/components/UserIntroduction.svelte";

	let table_headers = ["tytuł", "autorzy", "jendostka badawcza", "cytowane przez", "Rok"]
	const articles = []
</script>

<UserIntroduction />

<section>
	<table>
		<thead>
			<tr>
				<th>{table_headers[0].toUpperCase()}</th>
				<th>{table_headers[1].toUpperCase()}</th>
				<th>{table_headers[2].toUpperCase()}</th>
				<th>{table_headers[3].toUpperCase()}</th>
				<th>{table_headers[4].toUpperCase()}</th>
			</tr>
		</thead>
		<tbody>
			<PublicationOnProfile />
			<PublicationOnProfile />
			<PublicationOnProfile />
			<PublicationOnProfile />
			<PublicationOnProfile />
			<PublicationOnProfile />
		</tbody>
	</table>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	* {
		color: white;
	}
	table {
		align-self: center;
		width: 80vw;
		margin: 50px;
		background-color: #222;
	}
	table {
		padding: 15px;
		border-radius: 30px;
	}
	table{
		overflow: hidden;
		border: #bb4ab5 solid 2px;;
	}
	th {
		border-bottom: #bb4ab5 solid 2px;;

	}

</style>