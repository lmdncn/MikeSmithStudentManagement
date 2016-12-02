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

var studentRecord = mongoose.model('studentRecord', studentSchema);

mongoose.connect('mongodb://localhost/courseBlog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    exports.studentRecord = studentRecord;
});



