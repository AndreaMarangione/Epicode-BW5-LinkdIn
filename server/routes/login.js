const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/users');

login.post('/login', async (req, res, next) => {
    const user = await UsersModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).send({
            status: 404,
            message: 'User Not Found'
        })
    }
    try {
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).send({
                status: 403,
                message: 'Email Or Password Not Valid'
            })
        }
        const token = jwt.sign({
            email: user.email
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '1h'
            })
        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
})

module.exports = login;
