<script>
    import { goto } from '$app/navigation';

    let email = ""
    let name = ""
    let surname = ""
    let password = ""
    let phone = ""
    let companyName = ""
    let nip = ""
    let regon = ""
    let country = ""
    let adres = ""
    let state = ""
    let city = ""
    let postcode = ""
    let street = ""

    async function register_company(){
        const registerData = await backend.post("companyregister","martin", {
                email: email,
                name: name,
                surname: surname,
                password: password,
                phone: phone,
                companyName: companyName,
                nip: nip,
                regon: regon,
                country: country,
                state: state,
                city: city,
                postcode: postcode,
                street: street,       
            });
        console.log(registerData);
        if(registerData.status == "OK") {
            cookies.set("authkey", registerData.authkey);
            cookies.set("loggedAs", user);
            goto("/");
        } else if(registerData.status == "ERROR") {
            console.error(registerData.message);
        }
        
    }

</script>

<form method="post">
    <section id="double">

        <section id="left">
            <h1>Zarejestruj firmę</h1>
            <label for="name">Imię</label>
            <input type="text" name="name" placeholder="Jan" bind:value={name}>
            
            <label for="surname">Nazwisko</label>
            <input type="text" form="surname" placeholder="Kowalski" bind:value={surname}>

            <label for="mail">Email</label>
            <input type="email" name="mail" placeholder="kowalski@poczta.pl" bind:value={email}>
            
            
            <label for="password">Hasło</label>
            <input type="password" form="password" placeholder="hasło" bind:value={password}>
            
            <label for="phone">Telefon</label>
        <input type="tel" id="phone" name="phone" placeholder="123435789" bind:value={phone}>
        
        <label for="nazwa_firmy">Nazwa firmy</label>
        <input type="text" form="nazwa_firmy" placeholder="Janex SA" bind:value={companyName}> 
        
    </section>
    <section id="right">


        <label for="REGON">REGON</label>
        <input type="text" form="REGON" placeholder="123456789" bind:value={regon}>
        
        <label for="nip">NIP</label>
        <input type="text" form="nip" placeholder="1234563218" bind:value={nip}>
        
        <label for="country">Kraj</label>
        <input type="text" form="country" placeholder="Polska" bind:value={country}>
        
        <label for="region">region</label>
        <input type="text" form="region" placeholder="Dolny Śląsk" bind:value={state}>
        
        <label for="Miasto">Miasto</label>
        <input type="text" form="Miasto" placeholder="Wrocław" bind:value={city}>
        
        <label for="Kod_pocztowy">Kod pocztowy</label>
        <input type="text" form="Kod_pocztowy" pattern="[0-9]{5}" placeholder="41-501" bind:value={postcode}>
        
        <label for="adres">Adres</label>
        <input type="text" form="adres" placeholder="Uliczna 3/1" bind:value={adres}>
    </section>
</section>
    <section id="btn_section">
        <button type="submit" on:click={register_company}>Zarejestruj się</button>

        <p class="signup">Masz konto?<button id="gotolog" type="button" on:click={() => goto("/login")}>Zaloguj się</button></p>

    </section>
</form>

<style>
    #left, #right {
        height: 100%;
    }
    p {
        margin: 25px 0 0 0;
        font-size: 14px;
        width: 100%;
        text-align: center;


    }
    #gotolog {
            border: none;
            color: #b67ede;
            background: none;
            font-weight: bold;
            cursor: pointer;
        }
        h1 {
            color: #000;
            font-family: 'DM Sans', serif;
            font-size: 36px;
            margin: 0;
            margin-bottom: 15px;
        }
    form {
        width: fit-content;
        font-family: 'DM Sans', serif;
        padding: 30px;
        background: #fff;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;

    }
    #double {
        display: grid;
        grid-template-columns: .5fr .5fr;
        grid-auto-rows: auto;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    label {
        font-size: 20px;
    }
    section {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    input[type="text"], input[type="password"], input[type="tel"], input[type="email"], button[type="submit"] {
            font-family: 'DM Sans', serif;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #333;
            font-weight: 300;
        }
    button[type="submit"] {
            font-family: 'Raleway', serif;
            margin-top: 25px;
            background: #fff200;
            cursor: pointer;
            font-size: 1em;
            background: linear-gradient(#303133,#303133) padding-box,linear-gradient(90deg,#ed6e61,#6359e1) border-box;
            border: 4px solid transparent;
            color: white;
            font-weight: 600;
            padding: 10px;
        }

</style>
