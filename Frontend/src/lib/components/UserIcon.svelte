<script>
import { goto } from '$app/navigation';
	import { backend } from '$lib';

let profile_image = "https://imgs.search.brave.com/Cx1UU2_Kf_zCkw3prnIJ9TFp24dA9DWwnhn7-XzG13k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYwLzMzLzU4/LzM2MF9GXzYwMzM1/ODg0XzdCQ25DdzVr/bTVpVFNKcXBGMzR2/czVBUjg3dTJsUkdp/LmpwZw"
let dataReceived = []

async function gotoUser() {
    // backend.get("user", { username: "user1" });
    goto('/user-profile')
}
    
</script>

<img src="{profile_image}" alt="your profile" on:click={gotoUser}>

<style>
/* div {
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 100%;
} */

img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 2px 2px 2px 2px;
}

</style>