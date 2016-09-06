var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.getPosts(function(err, posts) {
        console.log(posts);
        res.render('index', {
            posts: posts
        });
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contactme');
});

module.exports = router;
