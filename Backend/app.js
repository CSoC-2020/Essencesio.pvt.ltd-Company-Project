const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/APIAuthenticationTEST', { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost/APIAuthentication', { useNewUrlParser: true });
}

const app = express();
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
// Routes
app.use('/users', require('./routes/user'));

module.exports = app;
