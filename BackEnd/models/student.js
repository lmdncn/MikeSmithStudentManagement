//Mongoose Schema For A Student Object to be Stored in DB

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({

  //Implement Schema

});

module.exports = mongoose.model('Student', StudentSchema);