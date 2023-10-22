<script>

import { goto } from '$app/navigation';
    

</script>

<div id="menu">
    <div class="menu_element" on:click={() => {goto("user-profile")}}>Profil</div>
    <div class="menu_element" on:click={() => {goto("user-profile")}}>lorem</div>
    <div class="menu_element" on:click={() => {goto("user-profile")}}>ipsum</div>
    <div class="menu_element" on:click={() => {goto("user-profile")}}>Wyloguj</div>

</div>

<style>

#menu {
    list-style: none;
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 4px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
}
.menu_element {
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border-bottom: 2px dashed transparent;
    width: 100%;
    height: 100%;
    color: #d8dcd6;
    font-size: 18px;
    font-weight: 600;
    transition: 0.2s ease-in-out;
}
.menu_element:hover {
    cursor: pointer;
    color: #9c31c6;
}
</style>