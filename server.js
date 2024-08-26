const express = require('express');
const { authenticator } = require('otplib');
const app = express();
const port = 3000;

// Secret Generator Route
app.get('/generate-secret', (req, res) => {
    const secret = authenticator.generateSecret();
    res.send(secret);
});

// Name Generator Route
app.get('/generate-name', (req, res) => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    res.send(randomName);
});

// Password Generator Route
app.get('/generate-password', (req, res) => {
    const password = crypto.randomBytes(8).toString('hex');
    res.send(password);
});

// 2FA Code Generator Route
app.get('/generate-2fa', (req, res) => {
    const secret = authenticator.generateSecret();
    const token = authenticator.generate(secret);
    res.send(token);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
