<script>
    import { goto } from '$app/navigation';
	import { backend, cookies, loginutil } from '$lib';

    let email = "";
    let user = "";
    let password = "";
    let surname = "";
    let confirmPassword = "";

    async function register() {
        const registerData = await backend.post("userregister", {
            email: email,
            user: user,
            surname: surname,
            password: password,
            confirm_password: confirmPassword
        });
        if(registerData.status == "OK") {
            loginutil.login(registerData.isCompany, registerData.authkey);
            goto("/");
        } else if(registerData.status == "ERROR") {
            console.error(registerData.message);
        }
    }
</script>

<form>
    <h1>Zarejestruj</h1>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="przykładowy-email@gmail.com" bind:value={email}>
    <label for="name">Imie</label>
    <input type="text" name="name" id="name" placeholder="Imie" bind:value={user}>
    <label for="name">Nazwisko</label>
    <input type="text" name="surname" id="surname" placeholder="Nazwisko" bind:value={surname}>
    <label for="password">Hasło</label>
    <input type="password" name="password" id="password" placeholder="Hasło" bind:value={password}>
    <label for="confirmPassword">Powtórz Hasło</label>
    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Hasło" bind:value={confirmPassword}>

    <button type="submit" on:click={register}>Zarejestruj</button>

    <p class="signup">Masz konto?<button type="button" on:click={() => goto("/login")}>Zaloguj się</button></p>
</form>

<style lang="scss">
    form {
        width: 320px;
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
            color: #3c3c3c;
        }

        input[type="email"], input[type="text"], input[type="password"], button[type="submit"] {
            font-family: 'DM Sans';
            padding: 10px;
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
    }
</style>
