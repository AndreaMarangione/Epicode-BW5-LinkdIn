const express = require('express');
const posts = express.Router();
const PostsModel = require('../models/posts');
const { linkedInPostCloudUpload } = require('../cloud/cloud');
const loginVerifyToken = require('../middlewares/loginVerifyToken');
const postCreateValidation = require('../middlewares/postCreateValidation');

posts.post('/post/create',
    [
        loginVerifyToken,
        linkedInPostCloudUpload.single('cover'),
        postCreateValidation
    ],
    async (req, res, next) => {
        try {
            const newPost = new PostsModel({
                ...req.body,
                cover: req.file.path || ''
            });
            const savePost = await newPost.save();
            res.status(201)
                .send({
                    status: 201,
                    message: 'Post added to database',
                    savePost
                });
        } catch (error) {
            next(error)
        }
    })

module.exports = posts;
