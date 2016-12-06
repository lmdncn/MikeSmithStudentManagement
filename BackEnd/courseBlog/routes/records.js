var mongoose = require('mongoose');
var Student = require('../models/student');
var bodyParser = require('body-parser');

module.exports = function(router){

// Student records route
router.get('/students', function(req, res){
    Student.find({},function(err, students){
        if (err) {
            res.json(err);
        }
        res.json(students);
    });
});



// Specific student record route
router.route('/students/:id')
    // Find a student's record by their student number
    .get(function(req, res) {
        Student.find({number: req.params.id}, function (err, student) {
            if (err) {
                res.json(err);
            }
            res.json(student);
        });
    })
    // Update a student's record
    .put(function(req, res) {
        Student.findOne({number: req.params.id}, function (err, student) {
            if (err) {
                res.json(err);
            }
            student.number = req.body.number;
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.dob = req.body.dob;
            student.residency = req.body.residency;
            student.gender = req.body.gender;
            
            student.save(function(err, student) {
                if (err) {
                    res.json(err);
                }
                res.json(student);
            });
        });
    });

    return router;

}
