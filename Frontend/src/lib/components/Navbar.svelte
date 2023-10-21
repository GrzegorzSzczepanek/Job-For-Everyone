<script>
	import Searchbar from "./Searchbar.svelte";
    import { cookies } from "$lib";
	import { invalidateAll, goto } from "$app/navigation";
    import { browser } from "$app/environment";

    let isLogged = undefined;
    if (browser) {
        isLogged = document.cookie.includes('loggedAs');
    }

    function logout() {
        console.log("Logging out: " + cookies.get("loggedAs"));
        cookies.delete("loggedAs");
        cookies.delete("authkey");
        console.log("Logging out (end): " + cookies.get("loggedAs"));
        invalidateAll();
        isLogged = false;
    }
</script>

<nav>
    <img src="#" alt="Logo">
    <Searchbar />
    <div class="logging">
        {#if isLogged}
            <button type="button" on:click={logout}>Wyloguj</button>
        {:else}
            <button type="button" on:click={() => { goto("/register"); }}>Zarejestruj</button>
            <button type="button" on:click={() => { goto("/login"); }}>Zaloguj</button>
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
