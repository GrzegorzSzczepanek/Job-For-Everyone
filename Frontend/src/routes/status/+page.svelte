<script>
    import { getData } from '$lib';

    const json = getData("192.168.105.223", "ping");
</script>

<div>{json.status == "pong" ? "Działa backend" : "Nie działa backend"}</div>