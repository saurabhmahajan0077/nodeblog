const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var CommentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: Date
    },
    body: {
        type: String
    }
});

var Comment = module.exports = mongoose.model('Comment', CommentSchema);
