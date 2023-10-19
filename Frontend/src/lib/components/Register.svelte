<script>
    import { goto } from '$app/navigation';
	import { backend } from '$lib';

    let email = "kocham.mamusie@wp.pl";
    let login = "login";
    let password = "test123";
    let confirmPassword = "test123";

    async function register() {
        const registerData = await backend.post("127.0.0.1", "register", {
            email: email,
            username: login,
            password: password,
            confirm_password: confirmPassword
        });
        console.log(registerData);
        if(registerData.status == "OK") goto("/");
    }

</script>

<form>
    <label for="email">Email</label>
    <input type="text" name="email" id="email" bind:value={email}>
    <label for="login">Login</label>
    <input type="text" name="login" id="login" bind:value={login}>
    <label for="password">Hasło</label>
    <input type="text" name="password" id="password" bind:value={password}>
    <label for="confirmPassword">Powtórz Hasło</label>
    <input type="text" name="confirmPassword" id="confirmPassword" bind:value={confirmPassword}>

    <button type="submit" on:click={register}>Register</button>
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