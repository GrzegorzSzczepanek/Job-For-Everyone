<script>
    import UserIcon from "./UserIcon.svelte";
    import Fa from 'svelte-fa'
    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
    import NavMenu from "./NavMenu.svelte";
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
	import { backend, cookies } from "$lib";
	import { browser } from "$app/environment";
  
    let username = "User Name"
    let showMenu = false;

    if(browser) {
        backend.get("user", {
            username: cookies.get("loggedAs")
        }).then(userInfo => {
            username = userInfo.username;
        });
    }

    function handleClick(event) {
        event.stopPropagation();
        showMenu = !showMenu;
    }

    function handleWindowClick() {
        showMenu = false;
    }

    onMount(() => {
        window.addEventListener('click', handleWindowClick);
        return () => window.removeEventListener('click', handleWindowClick);
    });
</script>

<nav>
    <img src="/src/lib/images/logo.svg" alt="scholar hub" srcset="" id="logo" on:click={() => goto("/")}>
    <div id="img_and_logout">
        <div>
            <div id="name_and_icon">
                <span id="username">{username}</span>
                <span id="arrow_icon" on:click={handleClick}>
                    <Fa icon={faAngleLeft} size="0.8x" color="#dcd6d6"/>
                </span>
                {#if showMenu}
                    <NavMenu />
                {/if}
            </div>
            <!-- <button on:click={logout}>Wyloguj</button> -->
        </div>
        <UserIcon />
    </div>

</nav>

<style lang="scss">
    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background: #333;
        box-shadow: 0 0 10px rgba(30, 30, 20);
        padding: 5px 10px;

        #logo {
            width: 40px;
            cursor: pointer;
        }
        
        #img_and_logout {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #dcd6d6;

            #name_and_icon {
                display: flex;

                #username {
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #arrow_icon {
                    display: inline-block;
                    font-size: 20px;
                    transition: ease-in-out .2s;
                    margin: 0 10px 0 5px;
                }
                
                &:active {
                    transform: rotate(-90deg);
                }
            }
        }
    }
</style>