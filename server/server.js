const express = require('express');
const cors = require('cors')
const multer =  require('multer'); // Thư viện multer để xử lý dữ liệu hình ảnh
const { spawn } = require('child_process');
const mysql = require('mysql2');
const { error } = require('console');

const app = express();
const port = 3001;

//su dung CORS Middleware
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'i.AMMIAK16',
    database: 'DrugWeb'
});

//LookUp
// Thiết lập multer để lưu trữ hình ảnh tạm thời trong thư mục uploads
const upload = multer({dest: 'uploads/'});
app.post('/predict', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    const pythonProcess = spawn('python', ['predict_drug.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

        const nameDrug = data.toString().trim();
        const query = 'select * from InformationDrug where nameDrug = ?';
        connection.query(query, [nameDrug], (error, results) => {
            if(error) {
                console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
                res.status(500).json({error: 'Loi khi truy van co so du lieu.'});
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

//Home
app.get('/posts/:id', (req, res) => {
    const postID = req.params.id;
    const query = 'select * from POSTS where id = ?';

    connection.query(query, [postID], (error, results) => {
        if(error) {
            res.status(500).json({error: 'Loi khi truy van co so du lieu.'});
        } else {
            if(results.length > 0){
                res.json(results[0]);
            } else {
                res.status(404).json({ error: 'Không tìm thấy bài viết' });
            }
        }
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});