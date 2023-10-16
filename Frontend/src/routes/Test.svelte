<script lang="ts">
    import { getData } from '$lib';
    
    const promise = getData("http://127.0.0.1:3000/api/test");

</script>

{#await promise}
	<p>...waiting</p>
{:then response}
<h1>Message: {response.message}</h1>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}