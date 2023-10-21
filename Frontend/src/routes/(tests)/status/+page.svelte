<script>
    import { onMount } from 'svelte';
    import { backend } from '$lib';

    let promise = undefined;
    onMount(() => {
        promise = backend.get("ping");
    });
</script>

{#await promise}
    <p>Checking backend status...</p>
{:then}
    <p>OK</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
