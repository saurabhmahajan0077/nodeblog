var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.getPosts(function(err, posts) {
        res.render('index', {
            pageHeading: 'Code Limbo',
            pageSubHeading: 'code.life',
            posts: posts
        });
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        pageHeading: 'About me',
        pageSubHeading: 'This is what I do.'
    });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contactme', {
        pageHeading: 'Contact me',
        pageSubHeading: 'Have questions? I have answers (maybe).'
    });
});

module.exports = router;
