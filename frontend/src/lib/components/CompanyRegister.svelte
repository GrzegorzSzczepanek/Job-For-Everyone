<script lang="ts">
	import { backend } from "$lib";
	import type { CompanyRegisterData, } from "$lib/objects";

    let registerData: CompanyRegisterData = {
		nip: "",
		regon: "",
		nipsc: "",
		regonsc: "",
		krs: "",
		pkd: "",
		compname: "",
		name: "",
		surname: "",
        password: ""
	}
    
    function sendRegisterData() {
        backend.post("companyregister", "martin", registerData);
    }
</script>

<form>
    <label for="nip">NIP</label>
    <input type="text" name="nip" bind:value={registerData.nip}>
    <label for="regon">REGON</label>
    <input type="text" name="regon" bind:value={registerData.regon}>
    <label for="nipsc">NIP Spółki Cywilnej</label>
    <input type="text" name="nipsc" bind:value={registerData.nipsc}>
    <label for="regonsc">REGON Spółki Cywilnej</label>
    <input type="text" name="regonsc" bind:value={registerData.regonsc}>
    <label for="krs">KRS</label>
    <input type="text" name="krs" bind:value={registerData.krs}>
    <label for="pkd">PKD</label>
    <input type="text" name="pkd" bind:value={registerData.pkd}>
    <label for="password">Hasło</label>
    <input type="password" name="password" bind:value={registerData.password}>
    <button type="submit" on:click={sendRegisterData}>Zarejestruj się</button>
</form>