<script>
import { backend } from "$lib";
	import { onMount } from "svelte";
    import { faFlag, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import Fa from "svelte-fa";

let data;
let username = "Ferdynand Kiepski";

onMount(async () => {
    data = await backend.get("user", { username: "dupa" });
    console.log(data);
});


let profile_picture = ""
let user_degree = "Niepełne podstawowe"
let user_university = "Politechnika Wrocławska"
let amount_of_publications = 0
let amount_of_citations = 0
let amount_of_reviews = 0
let main_fields = ["Math", "Computer Science"]
let joined = "01.01.2023"
// maybe profile bio will be max 200 characters
let profile_bio = "Oprócz dramatów, w skład II części wchodzi wiersz Upiór publikowany początkowo jako osobny utwór, zaś w skład III części rozległy Ustęp – epicki komentarz ukazujący obraz carskiej Rosji, "
console.log(profile_bio.length)
let color = "#FFF"
const icon_style = {
    secondaryOpacity: 1,
    primaryColor: color,
    size: "1.5x"

}


//TODO add non-svelte icons from font awesome

</script>

<header>
    <section id="profile_info">
        <div id="pic_container">
            <img src="https://http.cat/404" alt="{username}" id="profile_pic">
        </div>
        <div id="basic_info">
            <p id="name">{username}</p>
            <p id="date">Na platoformie od {joined}</p>
            <p id="degree">{user_degree}</p>
        </div>
        <div id="uni">
            <p >{user_university}</p>
        </div>
    </section>

    <section id="stats">
        <p>
            <span class="title">Ilość prac</span>
            <span> {amount_of_publications}</span>
            <span class="title">Ilość recenzji</span>
            <span>{amount_of_reviews}</span>
            <span class="title">Autora zacytowano</span>
            <span>{amount_of_citations} {amount_of_citations === 1 ? 'raz' : 'razy'}</span>

        </p>
    </section>
    <section id="personal">
        <p>
            <span class="title">Opis</span>
            <span>{profile_bio}</span>
            <span class="title">Dziedziny prowadzonych badań</span>
            <span>{main_fields.join(", ")}</span>

        </p>
    </section>
    <section id="socials">
        <a href="wp.pl">
            <Fa icon={faLinkedin} {...icon_style} />

        </a>
        <a href="wp.pl">
            <Fa icon={faGlobe} {...icon_style} />

        </a>
        
    </section>
    <section id="report">
        <Fa icon={faFlag} {...icon_style} />
        
    </section>
</header>


<style>

* {
    font-size: 14px;
}

header {
    display: grid;
    grid-template-columns: .8fr .5fr 1.1fr 0.15fr 0.1fr;    
    color: white;
    margin: 50px;
    grid-gap: 10px;
    background: transparent;
}

@media only screen and (max-width: 880px) {
    header {
        display: grid;
        grid-template-columns: .8fr .5fr 1.1fr 0.15fr 0.1fr;    
        color: white;
        margin: 50px;
        grid-gap: 10px;
        background: transparent;
        }
}
section {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    background-color: #222;
    border: #bb4ab5 solid 3px;
    transition: linear 0.2s;
}
section:hover {
    background-color: #303030;

}
#profile_info {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 70% 30%;
}
#pic_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#profile_pic {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    grid-column: 1;
    grid-row: 1;
    border: #bb4ab5 2px solid;
}

#basic_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    grid-column: 2;
    grid-row: 1;
}
#uni {
    display: flex;
  justify-content: center;
  align-items: center;
    grid-column: span 2;
    border-top: #bb4ab5 solid 2px;
}
#stats {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
#stats p {
    display: flex;
    flex-direction: column;
}
p .title {
    margin-top: 10px;
    font-size: 1.4em;
}
#personal {
    
    display: flex;
    justify-content: center;
    align-self: center;
}
#personal p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px 0 5px;
}
#socials, #report {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#socials {
    display: flex;
    justify-content: space-around;

}
#report {

}

</style>