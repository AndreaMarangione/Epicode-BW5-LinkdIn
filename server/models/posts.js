const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel',
        require: true
    }
}, { timestamps: true, strict: true })

module.exports = mongoose.model('PostsModel', PostsSchema, 'posts');
