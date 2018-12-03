/**
 * Node Modules
 */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const session  = require('express-session');

/**
 * Database Models
 */

const todosController = require('./server/controllers/todos');
const projectsController = require('./server/controllers/projects');
const models = require('./server/models');

/**
 * Server Config
 */

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

/**
 * Routes
 */

//const authRoute = require('./server/routes/auth.js')(app, passport);

/**
 * Passport Strategies
 */

require('./server/config/passport/local.js')(passport, models.user);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('hello world'));

app.get('/api/todos', todosController.list);
app.get('/api/projects', projectsController.list);

app.listen(PORT, HOST);
console.info('Express Server is up');
