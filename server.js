const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

app.post('/execute', (req, res) => {
    const { script } = req.body;
    console.log('Received script:', script);

    // Here you would send the script to Roblox using a secure method
    // For example, using HTTPService within Roblox or another method

    res.json({ status: 'success', message: 'Script received by the backend' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
