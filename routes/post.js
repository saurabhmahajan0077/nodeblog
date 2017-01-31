var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var Comment = require('../models/comment');

/* GET add post page. */
router.get('/add', function(req, res, next) {
    res.render('addpost', {
        pageHeading: 'New Post',
        pageSubHeading: 'Let your thoughts flow.',
    });
});

router.get('/show/:id', function(req, res, next) {
    Post.findById(req.params.id, function(err, resultPost) {
        if (err) {
            throw err;
        }
        res.render('viewpost', {
            pageHeading: resultPost.title,
            post: resultPost,
            comments: resultPost.comments
        });
    });
});

router.post('/add', function(req, res, next) {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;
    var newPost = new Post({
        title: title,
        category: category,
        author: 'Saurabh Mahajan',
        body: body
    });

    Post.createPost(newPost, function(err, post) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });

});

router.post('/addcomment/:id', function(req, res, next) {
    var postId = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var body = req.body.body;
    var newComment = new Comment({
        name: name,
        email: email,
        body: body
    });
    console.log(postId);
    Post.findById(req.params.id, function(err, resultPost) {
        if (err) {
            throw err;
        }
        console.log(resultPost);
        Post.addComment(resultPost, newComment, function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/post/show/' + req.params.id);
        });
    });

});
module.exports = router;
