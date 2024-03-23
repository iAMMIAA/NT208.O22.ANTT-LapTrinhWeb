const express = require('express');
const { PythonShell } = require('python-shell');
const app = express();
const port = 3000;

// Đường dẫn đến script Python
const pythonScriptPath = 'predict_drug.py';

// Middleware để xử lý dữ liệu từ client
app.use(express.json());

// Endpoint để nhận dữ liệu hình ảnh từ client và xử lý
app.post('/drug', (req, res) => {
    const imageData = req.body.imageData; // Dữ liệu hình ảnh từ client
    const options = {
        mode: 'text',
        pythonPath: 'path/to/your/python.exe', // Đường dẫn đến trình thông dịch Python
        pythonOptions: ['-u'], // unbuffered binary stdout and stderr
        scriptPath: 'C:\\Python311\\python.exe', // Đường dẫn đến thư mục chứa script Python
        args: [imageData] // Dữ liệu được truyền cho script Python (đường dẫn đến hình ảnh)
    };

    // Gọi script Python bằng PythonShell
    PythonShell.run(pythonScriptPath, options, function (err, results) {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Trả kết quả nhận diện thuốc về cho client
            res.send(results);
        }
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
