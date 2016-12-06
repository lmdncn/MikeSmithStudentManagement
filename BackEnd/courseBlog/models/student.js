var mongoose = require('mongoose');

var studentSchema = mongoose.Schema(
    {
        StudentNumber: String,
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        residency: String,
        gender: String
    }
);

mongoose.model('studentRecord', studentSchema);
