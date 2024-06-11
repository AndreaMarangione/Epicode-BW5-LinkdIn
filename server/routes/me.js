const express = require('express');
const me = express.Router();
const UsersModel = require('../models/users');
const loginVerifyToken = require('../middlewares/loginVerifyToken');

me.get('/me', loginVerifyToken, async (req, res, next) => {
    const { email } = req.user;
    try {
        const me = await UsersModel.findOne({ email })
        .select('email name surname');
        res.status(201).send(me)
    } catch (error) {
        next(error)
    }
})

module.exports = me;
