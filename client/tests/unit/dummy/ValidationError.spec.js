import {set, clear} from '../../src/utilities/errors/ValidationError.js';

test('set function', () => {
	var fields = {field: 'cats'};
	var errors = {};
	function set (fields, errors){
		expect(fields[field]).not.toEqual(errors[field]);
	}
	var errors = {field: 'kitter'};
	function set (fields, errors){
		expect(fields[field]).toEqual(errors[field]);
	}
	var fields = {};
	function set (fields, errors){
		expect(fields[field]).not.toEqual(errors[field]);
	}
})

//For clear (fields, fieldName = undefined):
// expect "fields" object's "error" property to be set to empty string IF "fields" object has a property "field"
test('clear function', () => {
	var fields = {field: 'cats'};
	function clear (fields, fieldName = undefined){
		expect(fields[field].error).tobe('');
	}
	var fields = {};
	function clear (fields, fieldName = undefined){
		expect(fields[field].error).not.tobe('');
	}
	function clear (testFields, fieldName = 'cade'){
		expect(testFields[fieldName]).not.tobe('');
	}
	var fields ={field: 'cats'}
	function clear (testFields, fieldName = 'cade'){
		expect(testFields[fieldName]).tobe('');
	}
})
