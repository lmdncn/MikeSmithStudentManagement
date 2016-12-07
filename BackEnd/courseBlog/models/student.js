var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema(
    {
        number: Number,
        firstName: String,
        lastName: String,
        DOB: String,
        residency: String,
        gender: String
    }
);

module.exports = mongoose.model('student', studentSchema);
