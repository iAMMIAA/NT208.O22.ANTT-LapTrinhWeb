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

//api for classification the drug
app.post('/upload', async(req, res) => {
    try{
        //read img from request
        const imgData = req.body.image;

        //convert imgData to tensor
        const imgTensor = tf.node.decodeImage(new Uint8Array(imgData), 3);
        const resizeImg = tf.image.resizeBilinear(imgTensor, [224, 224]);

        //normalize img
        const normalizeImg = resizeImg.div(tf.scalar(255));

        //make prediction
        const prediction = model.predict(normalizeImg.expandDims(0));
        const result = quediction.dataSync();

        //get predicted label (assuming the model output is softmax)
        const predictedLabelIndex = result.indexOf(Math.max(...result));

        //send response with predicted label
        res.json({result: predictedLabelIndex});

    } catch(error) {
        console.error('Error processing image: ', error);
        res.status(500).json({error: 'Error processing image'});
    }
})

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});