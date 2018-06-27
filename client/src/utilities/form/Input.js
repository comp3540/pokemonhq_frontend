export default{
  // This method accepts two parameters "fields" and "fieldName", and is responsible for clearing the input values of a form.
  // The "fields" parameter is an object containg the input fields of a form
  // that must contain a "value" key.
  // The "fieldName" parameter is the input's name that contains a value.
  clear (fields, fieldName = undefined) {
    // if the "fieldName" parameter is undefined, then we will clear all the field's input values
    let clearAll = (typeof fieldName === 'undefined');
    if (clearAll) { // clear all the values of the inputs
      for (let field in fields) { // loop through the "fields" object parameter's keys
        // if the "fields" object has a property "field"
        if (fields.hasOwnProperty(field)) {
          // then reset it's "value" property to an empty string (clearing it out)
          fields[field] = '';
        }
      }
    } else { // clear a specific value of an input
      // check if "fields" object has a property of the fieldName variable
      if (fields.hasOwnProperty(fieldName)) {
        // reset the "value" property to an empty string
        fields[fieldName] = '';
      }
    }
  },

  // This method accepts two parameters "fields", and "fieldName", and is responsible for returning an object with the input fields and their value properties.
  // The "fields" parameter is an object containg the input fields of a form
  // that must contain a "value" key.
  // The "fieldName" parameter is the input's name that contains a value property.
  getValue (fields, fieldName = undefined) {
    // if the "fieldName" parameter is undefined, then we will get all the fields input values
    let getAll = (typeof fieldName === 'undefined');

    // variable that will hold the key/value of inputs and their value properties
    let data = {};

    if (getAll) { // get all the values of the inputs
      for (const field in fields) { // loop through the "fields" object parameter's keys
        // if the "fields" object has a property "field"
        if (fields.hasOwnProperty(field)) {
          // then set the data[field] to the fields[field] value property
          data[field] = fields[field].value;
        }
      }
    } else { // get a specific value of an input
      if (fields.hasOwnProperty(fieldName)) {
        // set data[fieldName] property to the fields[fieldName] value property
        data[fieldName] = fields[fieldName].value;
      }
    }
    return data;
  }
};
