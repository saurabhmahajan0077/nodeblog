var express = require('express');
var router = express.Router();
var post = require('../models/post');
var comment = require('../models/comment');

/* GET add post page. */
router.get('/add', function(req, res, next) {
    res.render('addpost', {
        pageHeading: 'New Post',
        pageSubHeading: 'Let your thoughts flow.',
    });
});

router.get('/show/:id', function(req, res, next) {
    post.findById(req.params.id, function(err, post) {
        if (err)
            throw err;
        res.render('viewpost', {
            pageHeading: post.title,
            post: post,
            comments: post.comments
        });
    });
});

router.post('/add', function(req, res, next) {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;
    var newPost = new post({
        title: title,
        category: category,
        author: 'Saurabh Mahajan',
        body: body
    });

    post.createPost(newPost, function(err, post) {
        if (err)
            throw err;
        res.redirect('/');
    });

});

router.post('/addcomment/:id', function(req, res, next) {
    var postId = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var body = req.body.body;
    var newComment = new comment({
        name: name,
        email: email,
        body: body
    });
    console.log(postId);
    post.findById(req.params.id, function(err, result_post) {
        if (err)
            throw err;
        console.log(result_post);
        post.addComment(result_post, newComment, function(err, result) {
            if (err)
                throw err;
            res.redirect('/post/show/' + req.params.id);
        });
    });

});
module.exports = router;
