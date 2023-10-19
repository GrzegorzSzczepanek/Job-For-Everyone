/*
create table users (
id INTEGER PRIMARY KEY,
username varchar(255),
pass_hash varchar(255),
email varchar(255)
);

create table publications (
id INTEGER PRIMARY KEY,
title varchar(255),
authors varchar(255),
categories varchar(255),
number_of_pages int,
file varchar(255)
);

insert into users (username, pass_hash, email) values ("user1", "hash1", "email1");
insert into users (username, pass_hash, email) values ("user2", "hash2", "email2");
insert into publications (title, authors, categories, number_of_pages, file) values ("title1", "authors1", "categories1", 100, "file1");
insert into publications (title, authors, categories, number_of_pages, file) values ("title2", "authors2", "categories2", 200, "file2");


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
const jsruntime = require('js-runtime');
const bcrypt = jsruntime.isBun() ? undefined : require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const app = express();

const db = createClient({
    url: 'libsql://closing-kree-figyel0002.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTE4VDIwOjU2OjQzLjg2ODYwNDg4NVoiLCJpZCI6IjU1ZTFkMGNhLTZkZjgtMTFlZS1hYTY0LThhMzhjZTlmZjA5NSJ9.D_lnuc3RVHewV9DaA47dRysdyBbnsX1sUUEAr99qftlQgndCfOlqmqciwV3bAnAcrN8SWHR8SlxDOk8ZBarlCg'
});
const session_key = 'dihllskjdindrtidjlhmuflrkunho57jy374y7328&#$YHIERI'

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
    if (jsruntime.isBun()) {
        if (await Bun.password.verify(password, pass_hash)) {
            let user_obj = { username: rows.rows[0].username, pass_hash: rows.rows[0].pass_hash };
            let token = jwt.sign(user_obj, session_key);
            return res.json({ status: "OK", authkey: token });
        } else {
            return res.json({ status: "ERROR", message: "Wrong password" });
        }
    } else {
        return bcrypt.compare(password, pass_hash, (err, res2) => {
            if (res2) {
                let user_obj = { username: rows.rows[0].username, pass_hash: rows.rows[0].pass_hash };
                let token = jwt.sign(user_obj, session_key);
                return res.json({ status: "OK", authkey: token });
            } else {
                return res.json({ status: "ERROR", message: "Wrong password" });
            }
        });
    }
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

    let email_rows = await db.execute({sql: "SELECT * FROM users WHERE email = ?", args: [email]});
    if (email_rows.rows.length !== 0) {
        return res.json({ status: "ERROR", message: "User with this email already exists" });
    }

    if (password !== confirm_password) {
        return res.json({ status: "ERROR", message: "Passwords do not match" });
    }

    if (password.length < 4 || password.length > 64) {
        return res.json({ status: "ERROR", message: "Passwords wrong length" });
    }

    let pass_hash = undefined;
    if (jsruntime.isBun()) {
        pass_hash = await Bun.password.hash(password);
    } else {
        const salt = await bcrypt.genSalt(saltRounds);
        pass_hash = await bcrypt.hash(password, salt);
    }

    db.execute({ sql: "INSERT INTO users (username, pass_hash, email) VALUES (?, ?, ?)", args: [username, pass_hash, email] });

    let user_obj = { username: username, pass_hash: pass_hash };
    let token = jwt.sign(user_obj, session_key);
    return res.json({ status: "OK", authkey: token });
});

app.get('/publication', async (req, res) => {
    let publication_id = req.query.id;
    if (publication_id === undefined) {
        return res.json({ status: "ERROR", message: "Publication id not provided" });
    }
    let rows = await db.execute({ sql: "SELECT * FROM publications WHERE id = ?", args: [publication_id] });
    if (rows.rows.length === 0) {
        return res.json({ status: "ERROR", message: "Publication not found" });
    }
    let publication = rows.rows[0];
    res.json(publication);
});

app.get('/search', async (req, res) => {
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
    let rows = await db.execute("SELECT * FROM publications");
    rows = rows.rows;

    res.json(rows);
});

app.get('/user', (req, res) => {
    let username = req.query.username;
    if (username === undefined) {
        return res.json({ status: "ERROR", message: "Username not provided" });
    }
    return res.json({ name: "Adam Mickiewicz" });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
