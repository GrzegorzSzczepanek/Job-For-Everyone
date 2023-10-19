<script>
	import Searchbar from "./Searchbar.svelte";
    import { cookies } from "$lib";
	import { onMount } from "svelte";
	import { invalidateAll } from "$app/navigation";

    let loggedAs = undefined;
    let loggedIn = false;

    onMount(() => {
        loggedAs = cookies.get("loggedAs");
        loggedIn = loggedAs != undefined;
    });

    function logout() {
        console.log("Logging out: " + cookies.get("loggedAs") + "(" + loggedAs + ")");
        cookies.delete("loggedAs");
        console.log("Logging out (end): " + cookies.get("loggedAs"));
        invalidateAll();
    }
</script>

<nav>
    <img src="#" alt="Logo">
    <Searchbar />
    <div class="logging">
        {#if loggedIn}
        <button type="button" on:click={logout}>Wyloguj</button>
        {:else}
        <button type="button">Zarejestruj</button>
        <button type="button">Zaloguj</button>
        {/if}
    </div>
</nav>

<style lang="scss">
    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        font-weight: 600;
    }
</style>