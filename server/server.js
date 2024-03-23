//import express.js module
const express = require('express')
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

//create express application
const app = express();
const port = 3000;

//Load mode
const MODEL_PATH = './ResNet18.pth';
let model;
(async () => {
    model = await tf.loadLayersModel('file://${MODEL_PATH}');
    console.log('Model loaded');
})();

//define a route for your API
app.get('/api', (req, res) => {
    res.send("Welcome to my API!");
})

//api for 

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});