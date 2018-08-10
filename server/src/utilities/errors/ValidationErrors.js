module.exports = {
  validationMessageCreator (errors) {
    const validationErrors = {};
    let message = '';
    errors.details.forEach((error) => {
      if (!validationErrors.hasOwnProperty(error.path[0])) {
        switch (error.type) {
          case 'any.empty':
            message = 'This field is required and cannot be empty';
            break;
          case 'string.email':
            message = 'This field is not a valid email address';
            break;
          case 'string.regex.base':
            message = 'This field must be between 8 to 32 characters long';
            break;
        }
        validationErrors[error.path[0]] = message;
      }
    });
    return validationErrors;
  }
};
