
export default {
  // This method accepts two parameters "fields" and "errors", and is responsible for setting the input validation errors.
  // The "fields" parameter is an object containg the input fields of a form
  // that must contain an "error" key.
  // The "errors" parameter is an object containg the input fields validation errors.
  set(fields: any, errors: any) {
    // loop though the keys in the "fields" parameter
    for (const field in fields) {
      // if the "fields" object parameter has a property fields[field]
      if (fields.hasOwnProperty(field)) {
        // if the "errors" object parameter has the same fields[field] property
        if (errors.hasOwnProperty(field)) {
          // then set the fields[field] error property to the validation error found
          // at errors[field]
          fields[field] = errors[field];
        }
      }
    }
  },

  // This method accepts two parameters "fields" and "fieldName", and is responsible for clearing the input validation error/errors.
  // The "fields" parameter is an object containg the input fields of a form
  // that must contain an "error" key.
  // The "fieldName" parameter is the input's name that contains an error.
  clear(fields: any, fieldName?: string) {
    // if the "fieldName" parameter is undefined, then we will clear all the field's errors
    const clearAll = (typeof fieldName === 'undefined');

    if (clearAll) { // clear all the errors of the inputs
      // loop through the "fields" object parameter's keys
      for (const field in fields) {
        // if the "fields" object has a property "field"
        if (fields.hasOwnProperty(field)) {
          // then reset it's "error" property to an empty string (clearing it out)
          fields[field].error = '';
        }
      }
    } else { // clear a specific error of the input
      // check if "fields" object has a property of the fieldName variable
      if (fieldName && fields.hasOwnProperty(fieldName)) {
      // reset the "error" property to an empty string
        fields[fieldName] = '';
      }
    }
  },
};
