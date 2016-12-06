var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema(
    {
        StudentNumber: String,
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        residency: String,
        gender: String
    }
);

module.exports = mongoose.model('student', studentSchema);
