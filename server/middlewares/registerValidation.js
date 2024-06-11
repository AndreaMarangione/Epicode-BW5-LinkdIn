const { validationResult, checkSchema } = require('express-validator');

const registerValidation = async (req, res, next) => {
    try {
        await checkSchema({
            name: {
                errorMessage: 'Invalid name',
                isString: true,
                notEmpty: true,
            },
            surname: {
                errorMessage: 'Invalid surname',
                isString: true,
                notEmpty: true,
            },
            email: {
                errorMessage: 'Invalid email',
                isEmail: true,
                notEmpty: true,
            },
            password: {
                errorMessage: 'Invalid password',
                isString: true,
                isLength: {
                    options: { min: 1 },
                    errorMessage: 'Password should be at least 8 chars',
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
