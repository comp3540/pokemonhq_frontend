const Joi = require('joi');
const ValidationErrorsHelper = require('./../utilities/errors/ValidationErrors');
module.exports = {
  save (req, res, next) {
    const schema = Joi.object({
      name: Joi.string().required(),
      deck: Joi.string().required().regex(/^([0-9]+\s*)+$/)
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
