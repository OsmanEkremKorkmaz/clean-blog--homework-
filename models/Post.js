const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    subtitle: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
    name: String,

});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;