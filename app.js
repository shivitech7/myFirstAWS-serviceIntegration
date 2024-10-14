const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

require('dotenv').config();

// const apiUrl = 'http://localhost:3000';
// console.log(`API URL: ${apiUrl}`);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// axios.get(`${apiUrl}/`)
//     .then(response => {
//         console.log('Data from EC2 API:', response.data);
//     })
//     .catch(error => {
//         console.error('Error connecting to EC2 API:', error);
//     });
