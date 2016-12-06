var express = require('express');
var logger = require('./logger');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var studentRecord = require('./models/student.js');
mongoose.connect('mongodb://localhost/assignment2');

app.use(logger);
//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var records = require('./routes/records.js');
app.use('/api', records);

app.listen(3700, function () {
    console.log('Listening on port 3700');
});
