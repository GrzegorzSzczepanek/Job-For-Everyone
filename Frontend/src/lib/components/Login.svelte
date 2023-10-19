<script>
    import { goto } from '$app/navigation';
	import { backend, cookies } from '$lib';

    let username = "";
    let password = "";

    async function login() {
        const loginData = await backend.post("login", {
            username: username,
            password: password
        });
        console.log(loginData);
        if(loginData.status == "OK") {
            cookies.set("authkey", loginData.authkey);
            cookies.set("loggedAs", username);
            goto("/");
        }
    }

</script>

<form>
    <label for="login">Login</label>
    <input type="text" name="login" id="login" bind:value={username}>
    <label for="password">password</label>
    <input type="password" name="password" id="password" bind:value={password}>

    <button type="submit" on:click={login}>Log in</button>
</form>

<style lang="scss">
    form {
        max-width: 340px;
        font-family: 'Raleway';
        display: flex;
        flex-direction: column;
        padding: 10px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 5px;

        label {
            padding: 10px 0 5px 0;
        }

        input[type="text"], input[type="password"], button[type="submit"] {
            font-family: 'Montserrat';
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #333;
            font-weight: 300;
        }

        button[type="submit"] {
            margin-top: 20px;
            border: none;
            background: #fff200;
            cursor: pointer;
            font-size: 1em;
        }
    }
</style>