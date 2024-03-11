<script>
    import { goto } from '$app/navigation';
	import { backend, cookies, loginutil } from '$lib';

    let email = "";
    let password = "";

    let isError = false;
    let errorMessage = "";

    async function login() {
        let loginData = await backend.post("userlogin", "martin", {
            email: email,
            password: password
        });
        loginData = JSON.parse(loginData);
        if(loginData.status == "ERROR") {
            isError = true;
            errorMessage = loginData.message;
        }
        if(loginData.status === "OK") {
            loginutil.login(loginData.isCompany, loginData.authkey);
            goto("/");
        } else if(loginData.status === "ERROR") {
            console.error(loginData.message);
        }
    }
</script>

<form>
    <h1>Logowanie</h1>
    <label for="email">Email / Telefon</label>
    <input type="text" name="email" id="email" placeholder="test.email@gmail.com" bind:value={email}>
    <label for="password">Hasło</label>
    <input type="password" name="password" id="password" placeholder="Hasło" bind:value={password}>

    <button type="submit" on:click={login}>Zaloguj</button>

    <p class="signup">Nie masz konta?<button type="button" on:click={() => goto("/register")}>Zarejestruj się</button></p>
    <p class="signup">Nie pamiętasz hasła?<button type="button" on:click={() => goto("/register")}>Kliknij tutaj</button></p>
</form>

{#if isError}
    <p class="error">Error: {errorMessage}</p>
{/if}

<style lang="scss">
    form {
        width: 320px;
        font-family: 'DM Sans', serif;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: #fff;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;

        h1 {
            color: #000;
            font-family: 'DM Sans', serif;
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
            font-family: 'DM Sans', serif;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #333;
            font-weight: 300;
        }

        button[type="submit"] {
            font-family: 'Raleway', serif;
            margin-top: 25px;
            background: #fff200;
            cursor: pointer;
            font-size: 1em;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            color: white;
            font-weight: 600;
            padding: 10px;
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

        &:nth-child(2) {
            margin-top: 4px;
        }
    }

    .error {
        font-size: 24px;
        color: white;
    }
</style>
