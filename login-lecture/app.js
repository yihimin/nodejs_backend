const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express.js');
});

app.get('/login', (req, res) => {
    res.send('Hello, Login');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');

});