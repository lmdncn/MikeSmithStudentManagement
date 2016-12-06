var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema(
    {
        number: Number,
        firstName: String,
        lastName: String,
        DOB: Date,
        residency: String,
        gender: String
    }
);

module.exports = mongoose.model('student', studentSchema);
