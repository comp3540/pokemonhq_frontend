const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/),
      email: Joi.string().email()
    })

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
      const validationErrors = validationMessageCreator(error)
      res.status(419).send(validationErrors)
    } else {
      next()
    }
  }
}

function validationMessageCreator (errors) {
  const validationErrors = {}
  let message = ''
  errors.details.forEach((error) => {
    if (!validationErrors.hasOwnProperty(error.path[0])) {
      switch (error.type) {
        case 'any.empty':
          message = 'This field is required and cannot be empty'
          break
        case 'string.email':
          message = 'This field is not a valid email address'
          break
        case 'string.regex.base':
          message = 'This field must be between 8 to 32 characters long'
          break
      }
      validationErrors[error.path[0]] = message
    }
  })
  return validationErrors
}
