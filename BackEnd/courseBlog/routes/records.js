var Student = require('../models/student');
var bodyParser = require('body-parser');

module.exports = function(router){
// Student records route

router.get('/students', function(req, res){
    Student.find({},function(err, students){
        if (err) res.send(err);
        res.json(students);
    });
});



// Specific student record route
router.route('/students/:id')
    .get(function (req, res) {
        Student.find({number: req.params.id}, function (error, records) {
            if (error) {
                res.send({error: error});
            }
            res.json(records);
        });
    })
    .put(function (request, response) {
        Student.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({error: error});
            }
            else {
                post.title = request.body.post.title;
                post.body = request.body.post.body;
                post.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.send({post: post});
                    }
                });
            }
        });
    });

    return router;

}
