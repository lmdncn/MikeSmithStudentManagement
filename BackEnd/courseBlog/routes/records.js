var studentRecord = require('../models/student');
var bodyParser = require('body-parser');

module.exports = function(router){
// Student records route
router.get('/records', function(req, res){
    studentRecord.find(function(err, records){
        if (err) res.send(err);
        res.json(records);
    });
});


// Specific student record route
router.route('/records/:id')
    .get(function (request, response) {
        studentRecord.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({post: post});
            }
        });
    })
    .put(function (request, response) {
        studentRecord.findById(request.params.post_id, function (error, post) {
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
                        response.json({post: post});
                    }
                });
            }
        });
    })
    .delete(function (request, response) {
        studentRecord.findByIdAndRemove(request.params.post_id,
            function (error, deleted) {
                if (!error) {
                    response.json({post: deleted});
                }
            }
        );
    });

    return router;

}
