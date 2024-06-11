const UsersModel = require('../models/users');

const registerUserExist = async (req, res, next) => {
    try {
        const alreadyExist = await UsersModel.findOne({ email: req.body.email });
        if (alreadyExist) {
            next({
                status: 409,
                message: 'This User Already Exist',
            });
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = registerUserExist;
