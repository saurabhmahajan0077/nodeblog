const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
PostSchema.plugin(mongoosePaginate);

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPosts = function(page, limit, callback) {
    Post.paginate({}, {
        page: page,
        limit: limit
    }, function(err, posts) {
        callback(err, posts);
    });
    // Post.find({}, null, {
    //     sort: {
    //         date: -1
    //     }
    // }, function(err, posts) {
    //     callback(err, posts);
    // });
};

module.exports.getPostById = function(id, callback) {
    Post.findById(id, callback);
};

module.exports.createPost = function(post, callback) {
    post.date = Date.now();
    post.save(callback);
};
