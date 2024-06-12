const express = require('express');
const register = express.Router();
const UsersModel = require('../models/users');
const registerValidation = require('../middlewares/registerValidation');
const registerUserExist = require('../middlewares/registerUserExist');

register.post('/register',
    [
        registerValidation,
        registerUserExist
    ],
    async (req, res, next) => {
        try {
            const newUser = new UsersModel(req.body);
            await newUser.save();
            res.status(201).send({
                statusCode: 201,
                message: 'User Added To Database'
            })
        } catch (error) {
            next(error);
        }
    })

module.exports = register;
