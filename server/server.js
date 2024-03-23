const express = require('express');
const multer  = require('multer');
const tf = require('@tensorflow/tfjs-node');
const { createCanvas, loadImage } = require('canvas');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Load pre-trained ResNet18 model
let model;
(async () => {
    model = await tf.loadLayersModel('file://path/to/resnet18/model.json');
})();

// Process image
async function processImage(imagePath) {
    const img = await loadImage(imagePath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);

    // Preprocess image data if needed

    // Convert to tensor
    const tensor = tf.browser.fromPixels(imageData).toFloat().expandDims();

    // Make prediction
    const predictions = model.predict(tensor);

    // Postprocess predictions if needed

    return predictions;
}

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = req.file.path;
        const predictions = await processImage(imagePath);
        
        // Send predictions back to client
        res.json({ predictions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
