<script>
import Login from "$lib/components/Login.svelte";

function handleLogin(event) {
	alert(JSON.stringify(event.detail))
}

</script>

<Login on:login={handleLogin}/>