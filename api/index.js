const express = require('express');
const apiRouter = express.Router();
const path = require('path');

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, HOST);
