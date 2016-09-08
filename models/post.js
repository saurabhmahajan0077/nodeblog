const mongoose = require('mongoose');

mongoose.connect('mongodb://saurabh:saurabh@ds019926.mlab.com:19926/blogger-node');
console.log();

var db = mongoose.connection;

var PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date
    },
    body: {
        type: String
    }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPosts = function(callback) {
    Post.find({}, null, {
        sort: {
            date: -1
        }
    }, function(err, posts) {
        callback(err, posts);
    });
};

module.exports.createPost = function(post, callback) {
    post.date = Date.now();
    post.save(callback);
};
