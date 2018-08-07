//Todo:

import {clear, getValue} from '../../src/utilities/form/Input.js';

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


test('getValue function', () =>{
	var fields = {field: 'cats'};
	function getValue (fields, fieldName = undefined){
		expect(data[field]).tobe('cats');
	}
	var fields ={};
	function getValue (fields, fieldName = undefined){
		expect(data[field]).not.tobe('');
	}
	var fields = {field: 'cats'};
	function getValue (fields, fieldName = 'kitter'){
		expect(data[fieldName]).tobe('cats');
	}
	var fields ={};
	function getValue (fields, fieldName = 'kitter'){
		expect(data[fieldName]).not.tobe('');
	}
	
})
