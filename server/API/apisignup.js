const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');

const router = express.Router();
router.use(cors());
router.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'i.AMMIAK16',
    database: 'DrugWeb'
});
router.post('/signup', (req,res) =>{
    const {username, email,pass,confirm_pass}=req.body;
    const sql = 'INSERT INTO login (username, email, pass, confirm_pass) VALUES (?,?,?,?)';

    connection.query(sql,[username, email,pass,confirm_pass],(err,data)=>{
        if (err) {
            console.error('Error inserting data into database: ' + err.stack);
            return res.status(500).json({ error: 'Error inserting data into database' });
        }
        console.log('Data inserted into database');
        res.status(200).json({ message: 'Data inserted successfully' });
    })
});

module.exports= router