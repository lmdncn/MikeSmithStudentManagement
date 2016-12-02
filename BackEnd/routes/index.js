//This is an Express Route Js file that handels addresses from root

var express = require('express');
var router = express.Router();


// Get The Index From Client Side
router.get('/',function(req,res,next){

    res.render('index.html');

});

router.get('/Home',function(req,res,next){

    res.render('index.html');

});

module.exports = router;