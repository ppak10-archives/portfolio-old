/**
 * index.js
 */

// Node Modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const session  = require('express-session');

// Controllers
const todosController = require('./server/controllers/todos');
const projectsController = require('./server/controllers/projects');

// Server Config
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

// Routes
const {authRoutes, userRoutes} = require('./server/routes');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  name: 'user.sid',
  secret: 'keyboard cat', //process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 600000,
  },
}));

// Logs out user and clears cookie if cookie is still saved within the browser
// app.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     res.clearCookie('user_sid');
//   }
//   next();
// });

app.get('/', (req, res) => res.send('hello world'));

app.get('/api/todos', todosController.list);
app.get('/api/projects', projectsController.list);

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(PORT, HOST);
console.info('Express Server is up');
