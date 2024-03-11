// TODO: make sure user passed all and correct fields to endpoints and they are not empty

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
    url: // your database url,
    authToken: // your auth token here
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

    let rows = await db.execute({sql: "SELECT * FROM users WHERE username = :username", args: { username: username }});
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

    let rows = await db.execute({sql: "SELECT * FROM users WHERE username = :username", args: { username: username }});
    if (rows.rows.length !== 0) {
        return res.json({ status: "ERROR", message: "User already exist" });
    }

    let email_rows = await db.execute({sql: "SELECT * FROM users WHERE email = :email", args: { email: email }});
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

    db.execute({ sql: "INSERT INTO users (username, pass_hash, email, verified) VALUES (?, ?, ?, 0)", args: [username, pass_hash, email] });

    let user_obj = { username: username, pass_hash: pass_hash };
    let token = jwt.sign(user_obj, session_key);
    return res.json({ status: "OK", authkey: token });
});

app.get('/publication', async (req, res) => {
    let publication_id = req.query.id;
    if (publication_id === undefined) {
        return res.json({ status: "ERROR", message: "Publication id not provided" });
    }
    let rows = await db.execute({ sql: "SELECT * FROM publications WHERE id = :id", args: { id: publication_id }});
    if (rows.rows.length === 0) {
        return res.json({ status: "ERROR", message: "Publication not found" });
    }
    let publication = rows.rows[0];
    publication["status"] = "OK";
    let authors = await db.execute({
        sql: "SELECT users.username, users.name, users.lastname FROM users JOIN authors ON users.id = authors.user_ID WHERE authors.publication_ID = :id",
        args: { id: publication_id }
    });
    publication["authors"] = authors.rows;
    res.json(publication);
});

app.get('/search', async (req, res) => {
    let query = req.query.query;
    if (query === undefined) {
        return res.json({ status: "ERROR", message: "Query string not provided" })
    }
    // TODO: fuzzy matching
    let sql = "SELECT * FROM publications WHERE title LIKE '%' || :query || '%' OR short_desc LIKE '%' || :query || '%'";
    let args = { query: query };
    let author = req.query.author;
    if (author !== undefined) {
        // TODO: handle author filter
    }
    let category = req.query.category;
    if (category !== undefined) {
        // TODO: handle category filter
    }
    let review_count = req.query.review_count;
    if (review_count !== undefined) {
        // TODO: handle review count filter
    }
    // let count = req.query.count;
    // if (count !== undefined) {
    //     // TODO: handle count filter
    // }
    // let page = req.query.page;
    // if (page !== undefined) {
    //     // TODO: handle page filter
    // }
    let rows = await db.execute({ sql: sql, args: args });
    rows = rows.rows;
    res.json(rows);
});

app.get('/user', async (req, res) => {
    let username = req.query.username;
    if (username === undefined) {
        return res.json({ status: "ERROR", message: "Username not provided" });
    }
    let rows = await db.execute({sql: "SELECT * FROM users WHERE username = :username", args: { username: username }});
    if (rows.rows.length === 0) {
        return res.json({ status: "ERROR", message: "Username not found" });
    }
    rows = rows.rows[0];
    let user_obj = {
        status: "OK",
        username: rows.username,
        name: rows.name,
        lastname: rows.lastname,
        photo: rows.photo,
        description: rows.description,
        education: rows.education
    };
    return res.json(user_obj);
});

app.post('/post-comment', async (req, res) => {
    let body = req.body;
    let username = body.username;
    let comment = body.comment;
    let sql ={sql: "SELECT * FROM users WHERE username= :username", args: { username: username }};
    if (username === undefined || comment === undefined) {
         return res.json({ status: "ERROR", message: "Fields must not be empty" });
    }
    const rows = await db.execute(sql);
    if(rows.rows.length == 0) {
         return res.json({ status: "ERROR", message: "User not found" });
    }
    if(comment.length == 0) {
        return res.json({ status: "ERROR", message: "Comment is empty" });
    }
    // TODO: check if user exists - DONE
    // TODO: check if comment is empty - DONE
    // TODO: check authentication
    // TODO: add the comment to the DB
    res.json({ status: "OK" });
});

app.post('/post-reply', async (req, res) => {
    let body = req.body;
    let username = body.username;
    let reply = body.reply;
    let reply_to = body.reply_to;
    let sql ={sql: "SELECT * FROM users WHERE username= :username", args: { username: username }};
    const rows = await db.execute(sql);
    let user_ID;
    if (username === undefined || reply === undefined || reply_to === undefined) {
        return res.json({ status: "ERROR", message: "Fields must not be empty" });
    }
    if(rows.rows.length == 0) {
         return res.json({ status: "ERROR", message: "User not found" });
    }
    user_ID = rows.rows[0]['id'];
    if(reply.length == 0) {
        return res.json({ status: "ERROR", message: "Reply is empty" });
    }
   try {
        db.execute({sql: "INSERT INTO replies (user_ID, publication_ID, reply) VALUES (?, ?, ?)", args: [user_ID, reply_to, reply] });
    } catch (error) {
        console.log(error);
        return res.json({ status: "ERROR", message: "Error during execute SQL statement" });
    }
    // TODO: check if user exists - DONE
    // TODO: check if reply is empty - DONE
    // TODO: check authentication
    // TODO: add the comment to the DB
    res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
