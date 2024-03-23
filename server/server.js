//import express.js module
const express = require('express')
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

//create express application
const app = express();
const port = 3000;

//Load mode
const MODEL_PATH = '';

//define a route for your API
app.get('/api', (req, res) => {
    res.send("Welcome to my API!");
})

//st