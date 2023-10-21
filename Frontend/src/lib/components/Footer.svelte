<script>
import Fa from 'svelte-fa'
import { faHome, faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<footer>
    <span>
        <a href="wp.pl">
            <Fa icon={faHome}/> Główna
        </a>
        <a href="github.com">
            <Fa icon={faGithub}/> GitHub
        </a>
        <a href="wp.pl">
            <Fa icon={faLinkedin}/> LinkedIn
        </a>
        <a href="wp.pl">
            <Fa icon={faEnvelope}/> Napisz do nas
        </a>
        <a href="wp.pl">
            <Fa icon={faCodeBranch}/> v0.0.1
        </a>

    </span>

    <p>
        <span>
            Made By: Gwiezdna Flota
        </span>
    </p>
</footer>

<style lang="scss">
    footer {
        color: rgb(128, 128, 128);
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: 'Raleway';
        margin-top: auto;
        font-weight: 600;
        background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
        border-top: 4px solid transparent;
    }
    @media only screen and (max-width: 880px) {
        footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: auto;
        }
    }
    a {
        padding: 10px;
        color: rgb(196, 196, 196);
        text-decoration: none;
        transition: linear 0.2s;
        display: inline-block;
        margin-left: 30px;
        font-size: 14px;
    }
    a:hover {
        color: white;
    }
    @media only screen and (max-width: 664px) {
        footer {
            font-size: 0.9em;
        }
        a {
            padding: 0;
            margin: 10px;

        }
    }
    span {
        display: flex;
        font-weight: 600;
    }
    p {
        padding: 10px;
        display: flex;
        align-items: center;
        margin: 0px 30px 0px 0px;
        padding: 0;
    }
</style>
