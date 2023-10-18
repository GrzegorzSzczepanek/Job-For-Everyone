<script>
	import { createEventDispatcher } from "svelte";
    import { getData } from '$lib';

    const dispatch = createEventDispatcher();

    async function sendData() {
        let login = document.getElementById("login");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        
        let data = getData("192.168.105.233", "login");

        dispatch('login', data);
    }

</script>

<div>
    <label for="login">Login</label>
    <input type="text" name="login" id="login">
    <label for="email">email</label>
    <input type="text" name="email" id="email">
    <label for="password">password</label>
    <input type="text" name="password" id="password">

    <button on:click={sendData}>log in</button>
</div>