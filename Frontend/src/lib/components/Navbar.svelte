<script>
    import UserIcon from "./UserIcon.svelte";
    import NavMenu from "./NavMenu.svelte";
    import { goto } from "$app/navigation";
	import { cookies } from "$lib";
	import { browser } from "$app/environment";
    import { onMount } from 'svelte';
  
    let username = browser && cookies.get("loggedAs") != undefined ? cookies.get("loggedAs") : "Niezalogowany"
    let showMenu = false;


    function switchMenu(event) {
        event.stopPropagation();
        if(event.target.classList.contains("menu")) return;
        showMenu = !showMenu;
    }

    function handleNavbarHide(event) {
        console.log(event.target);
        showMenu = false;
    }

    onMount(() => {
        window.addEventListener('click', handleNavbarHide);
        return(() => window.removeEventListener('click', handleNavbarHide));
    });
</script>

<nav>
    <div class="logo-container" on:click={() => goto("/")}>
        <img src="/src/lib/images/logo.svg" alt="logo" srcset="" class="logo">
        <span>Scholar Hub</span>
    </div>

    <div class="profile-container" on:click={switchMenu}>
        <span class="profile-name">{username}</span>
        <UserIcon />

        {#if showMenu}
            <div class="profile-menu">
                <NavMenu />
            </div>
        {/if}
    </div>
</nav>

<style lang="scss">

    nav {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;

        .logo-container {
            display: flex;
            align-items: center;
            cursor: pointer;

            .logo {
                width: 40px;
            }

            span {
                color: #C4C4C4;
                font-size: 18px;
                font-weight: 600;
                margin-left: 10px;
            }
        }

        .profile-container {
            position: relative;
            display: flex;
            align-items: center;
            column-gap: 15px;
            cursor: pointer;

            &:hover .profile-name {
                color: #fff;
            }

            .profile-name {
                transition: 0.3s;
                color: #c4c4c4;
                font-size: 17px;
                font-weight: 500;
            }

            .profile-menu {
                position: absolute;
                top: calc(100% + 10px);
                right: 0;
                cursor: auto;
            }
        }
    }
</style>