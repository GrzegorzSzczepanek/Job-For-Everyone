<script>
	import UserIcon from "./UserIcon.svelte";
    import Fa from 'svelte-fa'
    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
	import NavMenu from "./NavMenu.svelte";

    let username = "User Name"
    

</script>

<nav>
    <img src="./logo.svg" alt="scholar hub" srcset="" id="logo">
    <div id="img_and_logout">
        <div>
            <div id="name_and_icon">
                <span id="username">{username}</span>
                 <span id="arrow_icon" on:click={manageClicked()}>
                    <Fa icon={faAngleLeft} size="0.8x" color="#dcd6d6"/>
                </span>

            </div>
            <!-- <button on:click={logout}>Wyloguj</button> -->
        </div>
        <UserIcon />
    </div>

</nav>

<style>
    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    #img_and_logout , #logo{
        margin: 20px;
    }
    #img_and_logout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #dcd6d6;
    }
    #name_and_icon {
        display: flex;
    }
    #arrow_icon {
        display: inline-block;
        font-size: 20px;
        transition: ease-in-out .2s;
        margin: 0 10px 0 5px;
    }
    #arrow_icon:active {
        transform: rotate(-90deg);
    }
    #username {
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>