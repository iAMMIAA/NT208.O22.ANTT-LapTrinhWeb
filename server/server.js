const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer =  require('multer'); // Thư viện multer để xử lý dữ liệu hình ảnh
const { spawn } = require('child_process');
const mysql = require('mysql2');
const { error } = require('console');
const jwt = require('jsonwebtoken');


const app = express();
const port = 3001;

app.use(cors()); //su dung CORS
app.use(bodyParser.json()); // Middleware để phân tích dữ liệu JSON từ client

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'i.AMMIAK16',
    database: 'DrugWeb'
});

// SignUp
app.post('/signup', (req, res) =>{
    console.log('iammia', req.body);
    const { username, useremail, userpassword, confirm_password }=req.body;
    const query = 'insert into SignupLogIn(username, useremail, userpassword, confirm_password) values (?,?,?,?)';

    connection.query(query,[username, useremail, userpassword, confirm_password],(err,data)=>{
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
app.post('/login', (req,res) =>{
    const {username,userpassword}=req.body;
    const query = 'select * from SignupLogIn WHERE username=? AND userpassword=?';
    
    connection.query(query,[username,userpassword],(error,data)=>{
        if (error) {
            console.error('Error querying database: ' + err.stack);
            return res.status(500).json({ error: 'Error querying database' });
        }
        if (data.length > 0) {
            console.log('User found in database');
            const user = data[0];
            const token = jwt.sign({ username: user.username, userpassword:user.userpassword }, jwtSecretKey);
            console.log("id User: ", user.id)
            res.status(200).json({ message: 'Success', token: token, idUser: user.id}); 
        } else {
            console.log('User not found in database');
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    })
});
app.post('/update_profile/:idUser', (req, res) => {
    const data = req.body;
    const idUser = req.params.idUser;
    const query = `update SignupLogIn set fullName = ?, school = ?, phoneNumber = ?, career = ?, gender = ?, country = ?, city = ?, areaCode = ? where id = ?;`
    connection.query(query, [data.fullName, data.school, data.phoneNumber, data.career, data.gender, data.country, data.city, data.areaCode, idUser], (error, results) => {
        if(error) {
            console.error('Error inserting data: ', error);
            res.status(500).json({error: 'Internal server error.'});
        } else {
            console.log('id user: ', idUser);
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    })
})
//Admin send data
app.post('/posts', (req, res) =>{
    console.log('iammia', req.body);
    const { title, author, cite_source, content } = req.body;
    const query = 'insert into POSTS(title, author, cite_source, content) values(?,?,?,?)';

    connection.query(query, [title, author, cite_source, content], (error, results) =>{
        if(error) {
            console.error('Error inserting data: ', error);
            res.status(500).json({error: 'Internal server error.'});
        } else {
            console.log('Data inserted successfully');
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    })
})
//LookUp
// Thiết lập multer để lưu trữ hình ảnh tạm thời trong thư mục uploads
const upload = multer({dest: 'uploads/'});
app.post('/predict', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    const pythonProcess = spawn('python', ['predict_drug.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Tên thuốc: ${data}`);

        const nameDrug = data.toString().trim();
        const query = 'select * from InformationDrug where nameDrug = ?';
        connection.query(query, [nameDrug], (error, results) => {
            if(error) {
                console.error(results);
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
    const query1 = 'update POSTS set number_of_viewer = number_of_viewer + 1 where id = ?';
    const query2 = 'select * from POSTS where id = ?';

    connection.query(query1, [postID], (error, results) => {
        if(error) {
            res.status(500).json({error: 'Loi khi truy van co so du lieu.'});
        } else {
            connection.query(query2, [postID], (error,results) =>{
                if(error)
                    res.status(500).json({error: 'Loi khi truy van co so du lieu.'});
                else
                        if(results.length > 0)
                            res.json(results[0]);
                        else 
                            res.status(404).json({ error: 'Không tìm thấy bài viết' });
                })
            }
        }
    );
});

app.get('/posts', (req, res) => {
    const query = `select * from POSTS`;

    connection.query(query, (error, result) => {
        if(error) {
            res.status(500).json({error: 'Loi khi truy van co so du lieu.'});
        } else {
            if(result.length > 0){
                res.json(result);
            } else {
                res.status(404).json({ error: 'Không tìm thấy bài viết' });
            }
        }
    })
})
// app.get('/related_post', (req, res) => {
//     const query = `select POSTS.title, POSTS.id, POSTS.author, POSTS.url_img 
//                     from POSTS 
//                     join TAGS 
//                     on TAGS.tags = POSTS.tag 
//                     where TAGS.tags = "Chăm_sóc_sức_khỏe"`;
//     connection.query(query, (error, results) => {
//         if(error) {
//             console.error('loi');
//             res.status(500).json({error: 'loi cmnr'});
//         } else {
//             res.status(200).json(results);
//         }
//     })
// });

app.get('/related_post/:tag', (req, res) => {
    const tagPost = req.params.tag;
    console.log(tagPost);
    const query = `select POSTS.title, POSTS.id, POSTS.author, POSTS.url_img, POSTS.date_update
                    from POSTS 
                    join TAGS 
                    on TAGS.tags = POSTS.tag 
                    where TAGS.tags = ?`;
    connection.query(query, [tagPost], (error, results) => {
        if(error) {
            console.error('loi');
            res.status(500).json({error: 'loi cmnr'});
        } else {
            res.status(200).json(results);
        }
    })
});
app.get('/related_drug/:tag', (req, res) => {
    const tagPost = req.params.tag;
    console.log(tagPost);
    const query = `select POSTS.title, POSTS.id
                    from POSTS 
                    where POSTS.tag = ?`;
    connection.query(query, [tagPost], (error, results) => {
        if(error) {
            console.error('loi');
            res.status(500).json({error: 'loi cmnr'});
        } else {
            res.status(200).json(results);
        }
    })
});
app.get('/arrange_view', (req, res) => {
    const query = `select * from POSTS 
                    order by number_of_viewer desc`;
    connection.query(query, (error, results) => {
        if(error) {
            console.error('loi');
            res.status(500).json({error: 'loi cmnr'});
        } else {
            res.status(200).json(results);
        }
    })
});
app.get('/arrange_dateupdate', (req, res) => {
    const query = `select *
                    from POSTS 
                    order by date_update desc`;
    connection.query(query, (error, results) => {
        if(error) {
            console.error('loi');
            res.status(500).json({error: 'loi cmnr'});
        } else {
            res.status(200).json(results);
        }
    })
});
app.get('/user/:idUser', (req, res) => {
    const idUser = req.params.idUser;
    console.log('myprofile: ', idUser);
    const query = `select * from SignupLogIn where id=?`
    connection.query(query, [idUser], (error, results) => {
        if(error) res.status(500).json({error: 'loi cmnr'});
        else {
            console.log(results);
            res.status(200).json(results[0]);
        }
    })
})

// Khởi động server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});