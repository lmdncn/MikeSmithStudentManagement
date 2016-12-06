var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var logger = require('./logger');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var records = require('./routes/records')(router);

mongoose.connect('mongodb://localhost:27017/assignment2', function(err){
    if(err){
        console.log("error connecting db" + err);
    } else {
        console.log("successfully connected to mongodb")
    }
});

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(logger);
//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', records);

app.listen(3700, function () {
    console.log('Listening on port 3700');
});


