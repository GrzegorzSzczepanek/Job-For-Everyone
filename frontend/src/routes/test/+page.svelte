<script>
	import { backend } from "$lib";
	import { onMount } from "svelte";

	onMount(async () => {
		let result = await backend.post("userregister", "martin", {
			email: "",
			name: "sdsd",
			surname: "",
			password: "",
			phone: ""
		});
		console.log(result);
	});
</script>