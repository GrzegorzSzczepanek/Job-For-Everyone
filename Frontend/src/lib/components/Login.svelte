<script>
    import { goto } from '$app/navigation';
	import { backend } from '$lib';

    let login = "";
    let password = "";

    async function logIn() {
        const registerData = await backend.post("127.0.0.1", "login", {
            username: login,
            password: password
        });
        console.log(registerData);
        if(registerData.status == "OK") goto("/");
    }

</script>

<form>
    <label for="login">Login</label>
    <input type="text" name="login" id="login" bind:value={login}>
    <label for="password">password</label>
    <input type="text" name="password" id="password" bind:value={password}>

    <button type="submit" on:click={logIn}>Log in</button>
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