<script>
    import { getData } from '$lib';

    const promise = getData("192.168.105.233", "ping");
</script>

<!-- <div>{json.status == "pong" ? "Działa backend" : "Nie działa backend"}</div> -->
{#await promise}
    <p>Checking backend status...</p>
{:then}
    <p>OK</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}