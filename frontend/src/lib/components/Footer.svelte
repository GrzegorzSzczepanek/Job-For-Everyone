<script>
import Fa from 'svelte-fa'
import { faHome, faEnvelope, faCodeBranch, faWheelchair, faCrutch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';
</script>

<footer>
    <section id="icon-section">
        <a href="/">
            <Fa icon={faHome}/> Główna
        </a>
        <a href="https://pfron.org.pl/instytucje/">
            <Fa icon={faCrutch}/> Państwowy Fundusz Rehabilitacyji Osób Niepełnosprawnych
        </a>
        <a href="https://www.gov.pl/web/rodzina/osoby-niepelnosprawne">
            <Fa icon={faWheelchair}/> Państwowy Informator Dla Osób Niepełnosprawnych
        </a>
    </section>
    <span>Gwiezdna Flota &nbsp;<Fa icon={faSpaceAwesome}/>&nbsp; 2023</span>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: $secondary;
        padding: 10px;
        color: $text;
        font-weight: 600;
        background: linear-gradient(#292929,#292929) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
        border-top: 4px solid transparent;
    }
    a {
        text-decoration: none;
        color: $text;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
