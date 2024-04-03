const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Thư viện multer để xử lý dữ liệu hình ảnh
const { spawn } = require('child_process');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { create, show, list } = require('./src/controllers/post.controller')

const app = express();
const port = 3001;

app.use(cors()); //su dung CORS
app.use(bodyParser.json()); // Middleware để phân tích dữ liệu JSON từ client

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'db_ttruc'
});

// SignUp
app.post('/signup', (req, res) => {
    console.log('iammia', req.body);
    const { username, useremail, userpassword, confirm_password } = req.body;
    const query = 'insert into SignupLogIn(username, useremail, userpassword, confirm_password) values (?,?,?,?)';

    connection.query(query, [username, useremail, userpassword, confirm_password], (err, data) => {
        if (err) {
            console.error('Error inserting data into database: ' + err.stack);
            return res.status(500).json({ error: 'Error inserting data into database' });
        }
        console.log('Data inserted into database');
        res.status(200).json({ message: 'Data inserted successfully' });
    })
});

//LogIn
const jwtSecretKey = 'medicalweb';
app.post('/login', (req, res) => {
    const { username, userpassword } = req.body;
    const query = 'select * from SignupLogIn WHERE username=? AND userpassword=?';

    connection.query(query, [username, userpassword], (error, data) => {
        if (error) {
            console.error('Error querying database: ' + err.stack);
            return res.status(500).json({ error: 'Error querying database' });
        }
        if (data.length > 0) {
            console.log('User found in database');
            const user = data[0];
            const token = jwt.sign({ username: user.username, userpassword: user.userpassword }, jwtSecretKey);
            res.status(200).json({ message: 'Success', token: token });
        } else {
            console.log('User not found in database');
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    })
});

//Admin send data
// app.post('/posts', (req, res) => {
//     console.log('iammia', req.body);
//     const { title, author, cite_source, content } = req.body;
//     const query = 'insert into POSTS(title, author, cite_source, content) values(?,?,?,?)';
//
//     connection.query(query, [title, author, cite_source, content], (error, results) => {
//         if (error) {
//             console.error('Error inserting data: ', error);
//             res.status(500).json({ error: 'Internal server error.' });
//         } else {
//             console.log('Data inserted successfully');
//             res.status(200).json({ message: 'Data inserted successfully' });
//         }
//     })
// })

//Home
// app.get('/posts/:id', (req, res) => {
//     const postID = req.params.id;
//     const query = 'select * from POSTS where id = ?';
//
//     connection.query(query, [postID], (error, results) => {
//         if (error) {
//             res.status(500).json({ error: 'Loi khi truy van co so du lieu.' });
//         } else {
//             if (results.length > 0) {
//                 res.json(results[0]);
//             } else {
//                 res.status(404).json({ error: 'Không tìm thấy bài viết' });
//             }
//         }
//     });
// });

//LookUp
// Thiết lập multer để lưu trữ hình ảnh tạm thời trong thư mục uploads
const upload = multer({ dest: 'uploads/' });
app.post('/predict', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    const pythonProcess = spawn('python', ['predict_drug.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

        const nameDrug = data.toString().trim();
        const query = 'select * from InformationDrug where nameDrug = ?';
        connection.query(query, [nameDrug], (error, results) => {
            if (error) {
                console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
                res.status(500).json({ error: 'Loi khi truy van co so du lieu.' });
            } else {
                if (results.length > 0) res.json(results[0]);
                else res.status(404).json({ error: 'Không tìm thấy thông tin thuốc.' });
            }
        })
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
});

app.get('/posts', list)
app.post('/posts', create)
app.get('/posts/:id', show)

// Khởi động server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});