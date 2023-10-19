/*
create table users (
id INTEGER PRIMARY KEY,
username varchar(255),
pass_hash varchar(255),
email varchar(255)
);

insert into users (username, pass_hash, email) values ("user1", "hash1", "email1");


/search

?query=xyz
?author=xyz
?category=xyz
?count=xyz
?page=xyz



[dupa]
fetch backend/search?query=xyz&page=1
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@libsql/client');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const db = createClient({
    url: 'libsql://closing-kree-figyel0002.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTE4VDIwOjU2OjQzLjg2ODYwNDg4NVoiLCJpZCI6IjU1ZTFkMGNhLTZkZjgtMTFlZS1hYTY0LThhMzhjZTlmZjA5NSJ9.D_lnuc3RVHewV9DaA47dRysdyBbnsX1sUUEAr99qftlQgndCfOlqmqciwV3bAnAcrN8SWHR8SlxDOk8ZBarlCg'
});

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.json({ status: "pong" });
});

app.post('/login', async (req, res) => {
    let body = req.body;
    let username = body.username;
    let password = body.password;

    if (username == "" || password == "") {
        return res.json({ status: "ERROR", message: "Fields must not be empty" });
    }

    if (password.length < 4 || password.length > 64) {
        return res.json({ status: "ERROR", message: "Passwords wrong length" });
    }

    let rows = await db.execute({sql: "SELECT * FROM users WHERE username = ?", args: [username]});
    if (rows.rows.length === 0) {
        return res.json({ status: "ERROR", message: "User does not exist" });
    }

    let pass_hash = rows.rows[0].pass_hash;
    return bcrypt.compare(password, pass_hash, (err, res2) => {
        if (res2) {
            // TODO: proper auth key (JWT)
            return res.json({ status: "OK", authkey: "secretkey" });
        } else {
            return res.json({ status: "ERROR", message: "Wrong password" });
        }
    });
});

app.post('/register', async (req, res) => {
    let body = req.body;
    let username = body.username;
    let password = body.password;
    let confirm_password = body.confirm_password;
    let email = body.email;

    if (username == "" || password == "" || email == "") {
        return res.json({ status: "ERROR", message: "Fields must not be empty" });
    }

    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_regex.test(email) === false) {
        return res.json({ status: "ERROR", message: "Incorrect email format" });
    }

    let rows = await db.execute({sql: "SELECT * FROM users WHERE username = ?", args: [username]});
    if (rows.rows.length !== 0) {
        return res.json({ status: "ERROR", message: "User already exist" });
    }

    if (password !== confirm_password) {
        return res.json({ status: "ERROR", message: "Passwords do not match" });
    }

    if (password.length < 4 || password.length > 64) {
        return res.json({ status: "ERROR", message: "Passwords wrong length" });
    }

    // TODO: proper auth token (JWT)

    const salt = await bcrypt.genSalt(saltRounds);
    const pass_hash = await bcrypt.hash(password, salt);

    db.execute({sql: "INSERT INTO users (username, pass_hash, email) VALUES (?, ?, ?)", args: [username, pass_hash, email]});

    return res.json({ status: "OK", authkey: "secretkey" });
});

app.get('/get', (req, res) => {
    let filename = req.query.filename;
    res.send(filename)
});

app.get('/search', (req, res) => {
    let query = req.query.query;
    if (query !== undefined) {
        // TODO: handle query
    }
    let author = req.query.author;
    if (author !== undefined) {
        // TODO: handle author filter
    }
    let category = req.query.category;
    if (category !== undefined) {
        // TODO: handle category filter
    }
    let count = req.query.count;
    if (count !== undefined) {
        // TODO: handle count filter
    }
    let page = req.query.page;
    if (page !== undefined) {
        // TODO: handle page filter
    }
    // TODO: return from the database
    res.json([
        {
            title: "paper 1",
            authors: ["author 1", "author 2"],
            categories: ["cat1", "cat2"],
            school: "school 1",
            number_of_pages: 100
        },
        {
            title: "paper 2",
            authors: ["author 1", "author 2"],
            categories: ["cat1", "cat2"],
            school: "school 2",
            number_of_pages: 101
        }
    ]);
});

app.get('/dbtest', async function(req, res) {
    db.execute("SELECT * FROM users;").then(async (users) => {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash("dupa", salt);
        console.log(hash);
        res.json(users.rows);
    });
});

app.get('/get_user', (req, res) => {
    console.log("get user");
    let username = req.query.username;
    console.log("USERUSLJSLDKJF", username);
    if (username === undefined) {
        console.log("get user undefined");
        return res.json({ status: "ERROR", message: "Username not provided" });
    }
    console.log("get user ok");
    return res.json({ name: "Adam Mickiewicz" });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
