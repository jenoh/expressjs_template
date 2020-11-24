var users = require('./routes/users');
var express = require('express');

var app = express();

app.use('/api/v1/users', users);

module.exports = app;