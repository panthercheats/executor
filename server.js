const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

app.post('/execute', (req, res) => {
    const { script } = req.body;
    console.log('Received script:', script);

    // For demonstration, we'll just log the script to the console
    // In a real-world application, you would handle the script execution logic here

    res.json({ status: 'success', message: 'Script received by the backend', script: script });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
