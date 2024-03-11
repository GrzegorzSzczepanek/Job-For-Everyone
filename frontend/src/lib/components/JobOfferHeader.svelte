<script>
	import BasicJobInfo from "./BasicJobInfo.svelte";

    export let employer;
    export let job_title;
    export let employer_logo;
    export let description;
    export let salary_min;
    export let salary_max;
    export let offer_type;
    export let type_of_employment;
    export let location;
</script>


<header id="info">
        <section id="job_info">
            <img src="http://156.17.72.125:3001/get_logo?filename={employer_logo}" alt="{employer}">
            <section id="info_section2">
                <h1 style="font-weight: bold; color: white;">{job_title}</h1>
                <p><strong>{employer}</strong></p>
                <p>{location}</p>
                <p>{salary_min} - {salary_max} brutto</p>
            </section>
        </section>
        <section id="employment_info">
            <BasicJobInfo up = "Wymiar pracy", down={type_of_employment}/>
            <BasicJobInfo up = "Dowświadczenie", down="Niewymangane" />
            <BasicJobInfo up = "Typ umowy", down = {offer_type} />
            <BasicJobInfo up = "Tryb pracy", down = {type_of_employment} />
        </section>
</header>


<style lang="scss">

img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin: 0 10px 0 10px;
}
p {

}

header {
    color: $text;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    height: 250px;
    width: 100%;
    background: linear-gradient(#2a2a2a,#2a2a2a) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
    border: 4px solid transparent;
    box-shadow: -10px 10px 0px #2c2c2c;
}

#job_info {
    display: flex;
    align-items: center;
    height: 100%;
    background: transparent;
}
#employment_info {
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#info_section {
    background: transparent;
    display: flex;
    flex-direction: column;
}
#info_section2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
}

</style>
