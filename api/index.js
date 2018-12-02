const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todosController = require('./server/controllers/todos');
const projectsController = require('./server/controllers/projects');

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('hello world'));

app.get('/api/todos', todosController.list);
app.get('/api/projects', projectsController.list);

app.listen(PORT, HOST);
console.info('Express Server is up');
