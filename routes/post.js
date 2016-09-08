var express = require('express');
var router = express.Router();
var post = require('../models/post');
/* GET add post page. */
router.get('/add', function(req, res, next) {
    res.render('addpost', {
        pageHeading: 'New Post',
        pageSubHeading: 'Let your thoughts flow.',
    });
});

router.get('/show/:id', function(req, res, next) {
    res.render('addpost');
});

router.post('/add', function(req, res, next) {

    var title = req.body.title;
    var body = req.body.body;
    var newPost = new post({
        title: title,
        category: '',
        author: 'Saurabh Mahajan',
        body: body
    });

    post.createPost(newPost, function(err, post) {
        if (err)
            throw err;
        res.redirect('/');
    });

});
module.exports = router;
