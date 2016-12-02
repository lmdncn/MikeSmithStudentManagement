//---------------------------------------------------------------------------------------------\\
// This Is the Express/Node Server BackEnd gor the Mike Smith Student Management System        \\
// By The Mike Smith Group (c)                                                                 \\
//---------------------------------------------------------------------------------------------\\




// ==================== Set Port Number Of Server Here ==================================================
var port = 8080;
// ------------------------------------------------------------------------------------------------------

// ==================== Set Port Adress Of MongoDB Here ==================================================
var db = 'mongodb://localhost:27017/MikeSmithStudentManagement';
// ------------------------------------------------------------------------------------------------------


'use strict';
// ==================== Model Requirements ====================================================
var express = require('express');
var app = express();

var path = require('path');

var logger = require('morgan'); // helps log all requests

var cookieParser = require('cookie-parser'); // for handling cookies

var bodyParser = require('body-parser'); // for parsing request URL


// AUTHENTICATION ==================================================================================
// const jwt = require('express-jwt');
// const cors = require('cors');

// // Cors To Handle Calls to diffrent port and addresses
// app.use(cors());

// // Token Valid
// const authCheck = jwt({
//     secret: new Buffer('YOUR-AUTH0-SECRET', 'base64'),
//     audience: 'YOUR-AUTH0-CLIENT-ID'
// });
//--------------------------------------------------------------------------------------------------



// ==================================== Set Up Routes ===========================================
//Import Routes Js Files
var index = require('./routes/index');
var students = require('./routes/students');
app.use('/', index);
app.use('/api', students);
// -----------------------------------------------------------------------------------------------


// set up logger and parsers
app.use(logger('dev')); // set up logger and parsers
app.use(bodyParser.json());

// Not Needed For Now
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// Cookie Parser
app.use(cookieParser());


// View Engine
app.set('views', path.join(__dirname, '/../client/dist'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)
//--------------------------------------------------------------------------------------------------


// ============================== Static route for client-side code goes Here =====================
app.use(express.static(path.join(__dirname, '/../client/dist')));
//--------------------------------------------------------------------------------------------------



// ================================= Setting Up Mongoose ===========================================
var mongoose = require('mongoose');
mongoose.connect(db); //connect to the db
//--------------------------------------------------------------------------------------------------





// ===============================  Function to handle client errors ===============================
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//--------------------------------------------------------------------------------------------------





// =========================================== Start the Server =======================================
app.listen(port, function () {
    console.log('Server listening on port ' + port + " !");
});























module.exports = app;