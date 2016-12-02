var express = require('express');
var router = express.Router();
var models = require('../models/student');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

// Student records route
router.route('/records')
    // Get all the student records
    .get(function (request, response) {
            models.student.find(function (error, posts) {
                if (error) response.send(error);
                response.json({post: posts});
            });
    })
    .post(function (request, response) {
        var post = new models.student(request.body.post);
        post.save(function (error) {
            if (error) response.send(error);
            response.json({post: post});
        });
    })

// Specific student record route
router.route('/records:id')
    .get(function (request, response) {
        models.student.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({post: post});
            }
        });
    })
    .put(function (request, response) {
        models.student.findById(request.params.post_id, function (error, post) {
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
        models.student.findByIdAndRemove(request.params.post_id,
            function (error, deleted) {
                if (!error) {
                    response.json({post: deleted});
                }
            }
        );
    });

module.exports = router;
