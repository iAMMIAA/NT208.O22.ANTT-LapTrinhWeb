const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Thêm thư viện jsonwebtoken
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

const jwtSecretKey = 'medicalweb';
router.post('/login', (req,res) =>{
    const {email,pass}=req.body;
    const sql = 'SELECT username, email FROM login WHERE email=? AND pass=?';
    connection.query(sql,[email,pass],(err,data)=>{
        if (err) {
            console.error('Error querying database: ' + err.stack);
            return res.status(500).json({ error: 'Error querying database' });
        }
        if (data.length > 0) {
            console.log('User found in database');
            const user = data[0];
            const token = jwt.sign({ username: user.username, email:email }, jwtSecretKey);
            res.status(200).json({ message: 'Success', token: token }); // Trả về token cùng với thông tin người dùng
        } else {
            console.log('User not found in database');
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    })
});
module.exports= router