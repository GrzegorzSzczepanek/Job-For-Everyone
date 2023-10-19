<script>
    import { getData } from '$lib';

    const promise = getData("192.168.105.233", "ping");
</script>

{#await promise}
    <p>Checking backend status...</p>
{:then}
    <p>OK</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}