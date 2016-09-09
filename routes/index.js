var express = require('express');
var paginate = require('express-paginate');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query.page);
    Post.getPosts(req.query.page, req.query.limit, function(err, posts) {
        res.render('index', {
            pageHeading: 'Code Limbo',
            pageSubHeading: 'code.life',
            posts: posts.docs,
            pageCount: posts.page
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
