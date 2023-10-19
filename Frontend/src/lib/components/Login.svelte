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
        if(loginData.status == "OK") {
            cookies.set("authkey", loginData.authkey);
            cookies.set("loggedAs", username);
            goto("/");
        } else if(loginData.status == "ERROR") {
            console.error(loginData.message);
        }
    }

</script>

<form>
    <h1>Logowanie</h1>
    <label for="login">Login</label>
    <input type="text" name="login" id="login" bind:value={username}>
    <label for="password">Hasło</label>
    <input type="password" name="password" id="password" bind:value={password}>

    <button type="submit" on:click={login}>Zaloguj</button>

    <p class="signup">Nie masz konta?<button type="button" on:click={() => goto("/register")}>Zarejestruj się</button></p>
</form>

<style lang="scss">

    form {
        width: 230px;
        font-family: 'DM Sans';
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: #fff;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;

        h1 {
            color: #000;
            font-family: 'DM Sans';
            font-size: 36px;
            margin: 0;
            margin-bottom: 15px;
        }

        label {
            font-weight: 500;
            font-size: 16px;
            padding: 10px 0 5px 0;
        }

        input[type="text"], input[type="password"], button[type="submit"] {
            font-family: 'DM Sans';
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #333;
            font-weight: 300;
        }

        button[type="submit"] {
            font-family: 'Raleway';
            margin-top: 25px;
            border: none;
            background: #fff200;
            cursor: pointer;
            font-size: 1em;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            color: white;
            font-weight: 600;
        }
    }

    p {
        margin: 25px 0 0 0;
        font-size: 14px;
        width: 100%;
        text-align: center;

        button {
            border: none;
            color: #b67ede;
            background: none;
            font-weight: bold;
            cursor: pointer;
        }
    }
</style>