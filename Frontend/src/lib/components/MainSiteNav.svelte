<script>
    import UserIcon from "./UserIcon.svelte";
    import Fa from 'svelte-fa'
    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
    import NavMenu from "./NavMenu.svelte";
    // import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
	import { cookies } from "$lib";
	import { browser } from "$app/environment";
  
    let username = browser && cookies.get("loggedAs") != undefined ? cookies.get("loggedAs") : "Niezalogowany"
    let showMenu = false;


function handleClick(event) {
    event.stopPropagation();
    showMenu = !showMenu;
  }

  function handleWindowClick() {
    showMenu = false;
    
  }

  import { onMount } from 'svelte';

  onMount(() => {
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  });
</script>

<nav>
    <div class="logo-container" on:click={() => goto("/")}>
        <img src="/src/lib/images/logo.svg" alt="logo" srcset="" id="logo">
        <span>Scholar Hub</span>
    </div>
    <div id="img_and_logout">
        <div>
            <div id="name_and_icon">
                <span id="username" on:click={handleClick}>{username}</span>
                <!-- <span id="arrow_icon" >
                    <Fa icon={faAngleLeft} size="0.8x" color="#dcd6d6"/>
                </span> -->
                {#if showMenu}
                    <div>
                        <NavMenu />
                    </div>
                {/if}
            </div>
            <!-- <button on:click={logout}>Wyloguj</button> -->
        </div>
        <UserIcon />
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

            #logo {
                width: 40px;
            }

            span {
                color: #C4C4C4;
                font-size: 18px;
                font-weight: 600;
                margin-left: 10px;
            }
        }

        
        #img_and_logout {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #dcd6d6;
        
            #name_and_icon {
                display: flex;
                flex-direction: column;
                background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
                border: 2px solid transparent;
                border-radius: 10px;
                margin-right: 10px;
                padding: 5px;
                cursor: pointer;

                #username {
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            
                // #arrow_icon {
                //     display: inline-block;
                //     font-size: 20px;
                //     transition: ease-in-out .2s;
                //     margin: 0 10px 0 5px;
                // }
                
                // #arrow_icon:active {
                //     transform: rotate(-90deg);
                // }
            }
            
        }
    }
</style>