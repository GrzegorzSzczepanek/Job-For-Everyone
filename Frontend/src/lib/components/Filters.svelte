<script>
	import Fa from "svelte-fa";
    import { faX } from '@fortawesome/free-solid-svg-icons'
	import { search_result } from "$lib";

    let available_categories = []
    for ( let i = 0; i < search_result.length; i++ ) {
        available_categories.push(search_result[i]["category"])
    }
    let categories_set = new Set(available_categories);

</script>

<section id="container">

    <section id="categories">
        <h3>
            Kategorie
        </h3>
        <div id="categories_container">
            {#each categories_set as cat}
                <div class="category_name">
                    {cat}
                </div>
            {/each}
        </div>
    </section>
    <section id="find_by_author">
        <h3>
            Autor
        </h3>
        <div>
            <input type="text">
            <Fa icon={ faX }/>
        </div>
    </section>
    <section id="find_by_opinion">
        <h3>
            Liczba opinii
        </h3>
        <p>Od <input type="number" class="number_input"> do<input type="number" class="number_input"></p>
    </section>
    <section id="find_by_publish_date">
        <h3>
            Data publikacji
        </h3>
        <p>
            <span>Od <input type="date" class="date_input"></span> <span>Do <input type="date" class="date_input"></span> </p>

    </section>
</section>

<style>
    h3, input, p {
        color: antiquewhite;
        margin-left: 15px;
    }
    span {
        margin-top: 5px;
    }
    input {
            border: none;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 2px solid transparent;
            border-radius: 20px;
            text-align: left;
            color: #f9f1ff;
            font-size: 13px;
            font-family: "DM Sans";
            box-shadow: none;
            transition: box-shadow 0.3s;

            &:focus {
                outline: none;
                -webkit-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                -moz-box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
                box-shadow: 1px 9px 15px -5px rgba(25, 25, 25, 1);
            }
        }
    .number_input {
        width: 30px;
    }
    .date_input {
    }
    #find_by_opinion {

    }
    #find_by_publish_date {
        
    }
    #find_by_publish_date p {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #categories {

    }
    #categories_container {
        display: flex;
        flex-wrap: wrap;
    }
    .category_name {
        border-radius: 20px;
        padding: 5px;
        margin: 5px;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(199,70,70,1) 0%, rgba(201,45,75,1) 100%);
        border: solid 3px #751207;
        cursor: pointer;
    }
    .category_name:hover {
        filter: brightness(120%);
    }

</style>