const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const apisignupRouter = require("./API/apisignup");
const apiloginRouter = require("./API/apilogin")

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567", 
    database: "user",
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});
app.use('/api/signup',apisignupRouter);
app.use('/api/login',apiloginRouter);

app.listen(4000, () => {
    console.log("Server is listening");
});
