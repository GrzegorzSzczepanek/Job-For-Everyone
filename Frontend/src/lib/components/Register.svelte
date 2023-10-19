<script>
    import { goto } from '$app/navigation';
	import { backend, cookies } from '$lib';

    let email = "kocham.mamusie@wp.pl";
    let username = "login";
    let password = "test123";
    let confirmPassword = "test123";

    async function register() {
        const registerData = await backend.post("register", {
            email: email,
            username: username,
            password: password,
            confirm_password: confirmPassword
        });
        console.log(registerData);
        if(registerData.status == "OK") {
            cookies.set("authkey", registerData.authkey);
            cookies.set("loggedAs", username);
            goto("/");
        } else if(registerData.status == "ERROR") {
            console.error(registerData.message);
        }
    }

</script>

<h1>Zarejestruj</h1>

<form>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" bind:value={email}>
    <label for="login">Login</label>
    <input type="text" name="login" id="login" bind:value={username}>
    <label for="password">Hasło</label>
    <input type="password" name="password" id="password" bind:value={password}>
    <label for="confirmPassword">Powtórz Hasło</label>
    <input type="password" name="confirmPassword" id="confirmPassword" bind:value={confirmPassword}>

    <button type="submit" on:click={register}>Zarejestruj</button>

    <p class="signup">Masz konto?<button on:click={() => goto("/login")}>Zaloguj się</button></p>
</form>

<style lang="scss">
    h1 {
        color: #fff;
        font-family: 'DM Sans';
        margin-bottom: 20px;
        font-size: 36px;
    }

    form {
        width: 230px;
        font-family: 'DM Sans';
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: #fff;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;

        label {
            font-weight: 500;
            font-size: 16px;
            padding: 10px 0 5px 0;
        }

        input[type="email"], input[type="text"], input[type="password"], button[type="submit"] {
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
        }
    }
</style>