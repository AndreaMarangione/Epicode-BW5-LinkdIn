const { validationResult, checkSchema } = require('express-validator');

const postCreateValidation = async (req, res, next) => {
    try {
        await checkSchema({
            title: {
                errorMessage: 'Invalid title',
                isString: true,
                notEmpty: true,
            },
            content: {
                errorMessage: 'Invalid content',
                isString: true,
                notEmpty: true,
            },
            author: {
                errorMessage: 'Invalid author',
                isString: true,
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
        next(error);
    }
}

module.exports = postCreateValidation;
