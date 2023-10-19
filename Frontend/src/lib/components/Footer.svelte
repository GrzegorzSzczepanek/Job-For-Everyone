<script>
import Fa from 'svelte-fa'
import { faHome, faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


</script>

<footer>
    <span>
        <a href="wp.pl">
        <Fa icon={faHome} color="white"/>
        Główna
        </a>
        <a href="github.com">
        <Fa icon={faGithub} color="white"/>
        GitHub
        </a>        
        <a href="wp.pl">
        <Fa icon={faLinkedin} color="white"/>
        LinkedIn
        </a>        
        <a href="wp.pl">
        <Fa icon={faEnvelope} color="white"/>
        Napisz do nas
        </a>
        <a href="wp.pl">
        <Fa icon={faCodeBranch} color="white"/>
        v0.0.1
        </a>

    </span>
    

    
    <p>
        <span>Made By: Gwiezdna Flota
        </span>
    </p>
</footer>

<style lang="scss">
    footer {
        color: rgb(128, 128, 128);
        background-color: #222;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: 'Raleway';
    }
    a {
        padding: 10px;
        color: rgb(128, 128, 128);
        text-decoration: none;
        transition: linear 0.2s;
        display: inline-block;
        margin-left: 30px;
    }
    a:hover {
        color: white;
    }

    span {
        display: flex;
    }

    p {
        padding: 10px;
        display: flex;
        align-items: center;
        margin: 0px 30px 0px 0px;
        padding: 0;
    }
</style>