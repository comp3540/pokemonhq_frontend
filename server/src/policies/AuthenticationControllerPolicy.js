const Joi = require('joi');
const ValidationErrorsHelper = require('./../utilities/errors/ValidationErrors');
module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/),
      email: Joi.string().email()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const validationErrors = ValidationErrorsHelper.validationMessageCreator(error);
      res.status(419).send(validationErrors);
    } else {
      next();
    }
  },

  login (req, res, next) {
    const schema = Joi.object({
      password: Joi.string().required(),
      email: Joi.string().email()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const validationErrors = ValidationErrorsHelper.validationMessageCreator(error);
      res.status(419).send(validationErrors);
    } else {
      next();
    }
  }
};
