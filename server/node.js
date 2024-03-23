const express = require('express');
const multer =  require('multer'); // Thư viện multer để xử lý dữ liệu hình ảnh
const { spawn } = require('child_process');


const app = express();
const port = 3000;

// Thiết lập multer để lưu trữ hình ảnh tạm thời trong thư mục uploads
const upload = multer({dest: 'uploads/'});

app.post('/predict', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    const pythonProcess = spawn('python', ['predict_drug.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(data); 
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});