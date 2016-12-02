//This handels student api requests

var express = require('express');
var router = express.Router();
var Students = require('../models/student');
var sanitizer = require('sanitizer');


//========================================== This Is For Auth0 ===================================
// const jwt = require('express-jwt');

// // Token Valid
// const authCheck = jwt({
//     secret: new Buffer('gPce_rvrT44vS-A81DesGEa5PUYOQdmssls9NiFyeYFu3VdZZDgxLal-MCRB-IKi', 'base64'),
//     audience: 'yOHOPEsMPE4f5l5JbRFuMDOO188oxW9X'
// });
//------------------------------------------------------------------------------------------------




//================================= Post =========================================================
router.post('/tabs', function (req, res, next) {


    console.log('posting student');

    let student = new Student({ 
      
    //   TODO: Implement Call to Student Constructor

    });


    console.log('made student' + JSON.stringify(student));

    student.save(function (err) {
        if (err) {

            res.send(err);
        }

        res.json(201, student);
    });

});
//---------------------------------------------------------------------------------------------------




//================================= Delete =========================================================
router.delete('/students', function (req, res, next) {

    console.log('Delete the student with id ' + req.body.sId);

    Students.remove({
        '_id': req.body.sId
    }, function (err) {
        if (err) {
            res.send(err)
        }
    });
});



//================================= Put =========================================================
router.put('/students', function (req, res, next) {

    console.log("Putting student id of "+req.body._id)

    Students.findById(req.body._id, function (err, s) {
        if (!s)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
    
            s.save(function (err) {
                if (err)
                    console.log('error')
                else
                    console.log('success')
            });
        }
    });
});



//================================= Get =========================================================
router.get('/students', function (req, res, next) {

    console.log('getting students');

    Students.find({
        //Enter Any Conditions Here
    }, function (err, students) {

        if (err) {
            res.send(err);
        }

        console.log(JSON.stringify(students));

        res.json(students);

    });

});


module.exports = router;