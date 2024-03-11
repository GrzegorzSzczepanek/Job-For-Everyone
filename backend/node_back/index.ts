const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs');

var db = mysql.createConnection({
    host: "156.17.72.125",
    user: "root",
    password: "haslo",
    database: "besthacks"
});

db.connect((err) => {
    if (err) throw err;
    // console.log("connected!");
});

const app = express();

function db_query(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.json({ status: "pong" });
});

app.get('/joboffer', async (req, res) => {
    let id = req.query.id;
    let rows = await db_query("SELECT * FROM joboffers WHERE id = " + id);
    if (rows.length === 0) {
        return res.json({});
    } else {
        return res.json(rows[0]);
    }
});

app.get('/get_logo', async (req, res) => {
    let filename = req.query.filename;

    if (filename === undefined) {
        return res.json({status: "ERROR", message: "filename not provided"});
    }

    fs.readFile('./logos/' + filename, function(err, data) {
        if (err) {
            return res.json({status: "ERROR", message: "logo not found"});
        }
        res.setHeader('Content-Type', 'image/png');
        return res.send(data);
    })
});

app.get('/search', async (req, res) => {
    let query = req.query.query;

    let sql = "SELECT * FROM `joboffers` WHERE ";

    if (query !== undefined) {
        sql = sql + "(`description` LIKE '%" + query + "%' OR `employer` LIKE '%" + query + "%')";
    } else {
        sql = sql + " 1=1 ";
    }

    let disability = req.query.disability;
    if (disability === "") {disability = undefined;}
    if (disability !== undefined) {
        sql = sql + "AND (`excluded_disabilities` NOT LIKE '%" + disability + "%')";
    }

    let location = req.query.location;
    if (location === "") {location = undefined;}
    if (location !== undefined) {
        sql = sql + "AND (`location` LIKE '%" + location + "%')";
    }

    let job_title = req.query.job_title;
    if (job_title === "") {job_title = undefined;}
    if (job_title !== undefined) {
        sql = sql + "AND (`job_title` LIKE '%" + job_title + "%')";
    }

    let category = req.query.category;
    if (category === "") {category = undefined;}
    if (category !== undefined) {
        sql = sql + "AND (`job_title` LIKE '%" + category + "%')";
    }

    console.log(query, disability, location, job_title, sql);
    var rows = await db_query(sql);

    res.json(rows);
});

app.post('/new_joboffer', async (req, res) => {
    let data = req.body;
    let employer = data.employer;
    let description = data.description;
    let employer_logo = "logo1.png"; // TODO
    let job_title = data.job_title;
    let type_of_employment = data.type_of_employment;
    let location = data.location;
    let excluded_disabilities = data.excluded_disabilities;
    let salary_min = data.salary_min;
    let salary_max = data.salary_max;
    if (employer === undefined ||
        description === undefined ||
        employer_logo === undefined ||
        job_title === undefined ||
        type_of_employment === undefined ||
        location === undefined ||
        excluded_disabilities === undefined ||
        salary_min === undefined ||
        salary_max === undefined) {
        return res.json({status: "ERROR", message: "you need to provide all fields"});
    }
    let rows = db_query("INSERT INTO joboffers (employer, description, employer_logo, job_title, type_of_employment, location, excluded_disabilities, salary_min, salary_max) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [employer, description, employer_logo, job_title, type_of_employment, location, excluded_disabilities, salary_min, salary_max]);
    return res.json({status: "OK"});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
