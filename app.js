const express = require('express');

const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Home</h1>
    <p>Docker is awesome!</p>
    <a href="/more" alt="Next Page">Next Page</a>
    `,
  );
});

app.get('/more', (req, res) => {
  res.send(
    `
    <h1>Page Two</h1>
    <p>Node.js is pretty great too!!</p>
    <a href="/" alt="Back Home">Back Home</a>
    `,
  );
});

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);
