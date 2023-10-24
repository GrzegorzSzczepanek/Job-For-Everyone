
<div class="menu">
    <a class="menu-element" href="/user-profile">Profil</a>
    <a class="menu-element" href="/user-profile">lorem</a>
    <a class="menu-element" href="/user-profile">lorem</a>
    <a class="menu-element" href="/user-profile">Wyloguj</a>
</div>

<style lang="scss">

.menu {
    list-style: none;
    background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 2px;
    padding: 20px 30px;

    .menu-element {
        color: #d8dcd6;
        font-size: 18px;
        font-weight: 600;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: #fff;
        }
    }
}
</style>