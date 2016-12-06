var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var studentRecord = mongoose.model('studentRecord');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

// Student records route
router.route('/records')
    // Get all the student records
    .get(function (req, res) {
            studentRecord.find(function (err, record) {
                if (err) {
                    return res.send(500, err);
                }
                return res.json(record);
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

module.exports = router;
