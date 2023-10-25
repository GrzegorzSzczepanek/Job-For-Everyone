<script>
	import { goto } from "$app/navigation";
    import { cookies } from "$lib";
    import { fly, fade } from 'svelte/transition';
    console.log(cookies)
    function logOut() {
        cookies.delete("loggedAs")
        cookies.delete("authkey")
        goto("/");
        location.reload();
    }
</script>


<div class="menu"   in:fly={{ x: 50, delay: 0, duration: 300 }} out:fly={{ x: -50, duration: 300 }}>
    <a class="menu-element" href="/user-profile">Profil</a>
    <a class="menu-element" href="#">lorem</a>
    <a class="menu-element" href="#">lorem</a>
    <p class="menu-element" on:click={logOut}>Wyloguj</p>
</div>

<style lang="scss">

.menu {
    list-style: none;
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 2px solid transparent;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 2px;
    padding: 20px 30px;

    .menu-element {
        color: #d8dcd6;
        font-size: 20px;
        font-weight: 600;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: #fff;
        }
    }
}
</style>