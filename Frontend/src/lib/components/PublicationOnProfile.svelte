<script>
    let title = "Gang Albanii - Ciężki Gnój. Analiza dzieła z perspektywy psychologii ewolucyjnej"
    let author = "Tomek";
    let coauthors = ["Basia", "Gang Albanii", "Krzysiek", "JOrdan z tvgry"];
    let user_university = "Politechnika Wrocławska";
    let amount_of_citations = 2137;
    let year_of_publish = 2000;

</script>

<tr id="author_info">

    <a href="xd.pl">
    <td id="publication_info">
        <p id="tit">{title}</p>
    </td>
    </a>
    <td>
    <p id="authors">{author} {coauthors.length > 0 ? ", oraz współautorzy: " + coauthors.join(", ") : "" }</p>
    </td>
    <td>
        <p id="uni">{user_university}</p>
    </td>


    <td>Zacytowano: {amount_of_citations}</td>
    <td>Rok: {year_of_publish}</td>
</tr>

<style>
    a {
        text-decoration: none;
        color: white;
        transition: 0.2s linear;
    }
    a:hover {
        color:goldenrod
    }

    p {
        margin-top: 10px;
    }
    td {
        border-bottom:  #bb4ab5 solid 2px;
    }
    td:hover {
		background-color: #303033;
	}
    #publication_info {
        display: flex;
    }
    #uni {

    }
</style>
