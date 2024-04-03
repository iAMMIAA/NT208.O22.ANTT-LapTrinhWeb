const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { spawn } = require('child_process');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const apiuserrouter = require("./API/apiuser")

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567",
    database: "DrugWeb",
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

app.post('/signup', (req, res) => {
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
const jwtSecretKey = 'medicalweb';
app.post('/login', (req, res) => {
    const { username, userpassword } = req.body;
    const query = 'select * from SignupLogIn WHERE username=? AND userpassword=?';

    connection.query(query, [username, userpassword], (error, data) => {
        if (error) {
            console.error('Error querying database: ' + error.stack);
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

app.post('/posts', (req, res) => {
    const { title, author, cite_source, content } = req.body;
    const query = 'insert into POSTS(title, author, cite_source, content) values(?,?,?,?)';

    connection.query(query, [title, author, cite_source, content], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            res.status(500).json({ error: 'Internal server error.' });
        } else {
            console.log('Data inserted successfully');
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    })
});

app.get('/posts/:id', (req, res) => {
    const postID = req.params.id;
    const query = 'select * from POSTS where id = ?';

    connection.query(query, [postID], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Loi khi truy van co so du lieu.' });
        } else {
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).json({ error: 'Không tìm thấy bài viết' });
            }
        }
    });
});

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
            }
            else {
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

app.use('/user',apiuserrouter)
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
