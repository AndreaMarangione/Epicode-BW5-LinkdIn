const { validationResult, checkSchema } = require('express-validator');

const registerValidation = async (req, res, next) => {
    try {
        await checkSchema({
            email: {
                errorMessage: 'Invalid email',
                isEmail: true,
                notEmpty: true,
            },
            password: {
                errorMessage: 'Invalid password',
                isString: true,
                isLength: {
                    options: { min: 6 },
                    errorMessage: 'Password should be at least 6 chars',
                },
                notEmpty: true,
            }
        }).run(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next({
                status: 400,
                message: errors.array(),
            });
        }
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = registerValidation;
