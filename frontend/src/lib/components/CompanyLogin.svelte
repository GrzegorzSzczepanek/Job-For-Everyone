<script lang="ts">
	import { backend } from "$lib";
	import type { CompanyLoginData } from "$lib/objects";

    let loginData: CompanyLoginData = {
		email: "",
		password: ""
	}
    
    function sendLoginData() {
        backend.post("companylogin", "martin", loginData);
    }


</script>

<form>
    <label for="email">Email</label>
    <input type="text" name="email" bind:value={loginData.email}>
    <label for="password">Hasło</label>
    <input type="password" name="password" bind:value={loginData.password}>
    <button type="submit" on:click={sendLoginData}>Zarejestruj się</button>
</form>