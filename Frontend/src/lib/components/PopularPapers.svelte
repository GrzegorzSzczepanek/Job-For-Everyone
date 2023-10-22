<script>
	import Fa from 'svelte-fa';
    import { faBook } from '@fortawesome/free-solid-svg-icons'

    let title = "Language Models are Few-Shot Learners"
    let authors = ["Tom B. Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan"]


</script>

<div class="trending">
    <article>
        <div>
            <Fa icon={faBook} size="3x", color="#dcd6d6"/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>Author(s): {authors.join(", ")}</p>

        </div>
    </article>

</div>

<style>
    div {
        margin-right: 20px;
    }
    article {
        color: #dcd6d6;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>