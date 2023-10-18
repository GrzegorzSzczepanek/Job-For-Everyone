const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.get('/login', (req, res) => {
    res.json({ status: "OK", authkey: "secretkey" });
});

app.get('/register', (req, res) => {
    res.json({ status: "ERROR", message: "Critical error. Nuclear reactor launch sequence aborted." });
});

app.get('/get', (req, res) => {
    let filename = req.query.filename;
    res.send(filename)
});

app.get('/search', (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
