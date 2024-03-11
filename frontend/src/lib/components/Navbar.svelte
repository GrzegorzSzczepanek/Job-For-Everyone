<script>
    import Fa from 'svelte-fa'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
    import SideMenu from "./SideMenu.svelte";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
	import { assets } from "$lib";

    // let username = browser && cookies.get("loggedAs") != undefined ? cookies.get("loggedAs") : "Niezalogowany"
    let showMenu = false;

    function switchMenu(event) {
        event.stopPropagation();
        if(event.target.classList.contains("menu")) return;
        showMenu = !showMenu;
    }

    function handleNavbarHide(event) {
        showMenu = false;
    }

    onMount(() => {
        window.addEventListener('click', handleNavbarHide);
        return(() => window.removeEventListener('click', handleNavbarHide));
    });
</script>

<nav>
    <div class="logo-container" on:click={() => goto("/")}>
        <img src="{assets.getAssetUrl("logo.svg")}" alt="logo" srcset="" class="logo">
        <span style="color: #e2e2e2;">Praca Dla Każdego</span>
    </div>

    <div class="menu-button" on:click={switchMenu}>
        <Fa icon={faBars} size="1.6x" color="#8f9a9c"/>
        {#if showMenu}
            <div class="profile-menu">
                <SideMenu />
            </div>
        {/if}
    </div>
</nav>

<style lang="scss">
    .menu-button {
        width: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .log_button, .register_button {
        color: rgb(225, 220, 209);
        cursor: pointer;
    }
    .log_button {

    }
    .register_button {
        border: 2px solid #C4C4C4;
        padding: 6px;
        border-radius: 10px;
        transition: 0.2s;
    }
    .register_button:hover {
        background-color: #C4C4C4;
        color: #232325;
        border: #232325 2px solid;
    }
    nav {
        background-color: #272727;
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
