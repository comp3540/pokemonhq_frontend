/* eslint-disable */
// import the validation errors class
import ValidationErrors from './validationErrors';

/**
 * Form class
 *
 * @package classes
 */

export default class Form{

	/**
	 * Class constructor
	 *
	 * @return void
	 */
	constructor(fields){

		// instantiate validation errors object
		this.validationErrors = new ValidationErrors();

		// set the fields attribute
		this.fields = fields;
	}

	/**
	 * Set the fields attribute. 
	 *
	 *
	 * @return void
	 */
	setFields(fields){

		// for each field in fields, 
		for (let field in fields){
			if(this.fields.hasOwnProperty(field)){
				this.fields[field].value = fields[field]
			}
		}
	}

	/**
	 * Get the fields attribute. 
	 *
	 *
	 * @return Object fields
	 */
	getFields(){
		return this.fields;
	}

	/**
	 * Execute the on success method after a successful
	 * api form action
	 *
	 * @return void
	 */
	onSuccess(){

		// reset the form fields	
		this.reset();
	}

	/**
	 * Execute the on fail method after an unsuccessful
	 * api form action
	 *
	 * @return void
	 */
	onFail(errors){
		this.validationErrors.set(errors);
	}

	/**
	 * Get the data to be sent to server.
	 * 
	 *
	 * @return Object data
	 */
	data(){

		// instantiate empty object
		let data = {}

		// loop through fields, and add attribute/value to data variable
		for (let field in this.fields){
			data[field] = this.fields[field].value
		}

		// return the data object
		return data;
	}

	/**
	 * Reset all fields in the form.
	 * 
	 *
	 * @return void
	 */
	reset(){
		// this.resetRec(this.fields);
		for (let field in this.fields){
			if(this.fields[field].type === 'text'){
				this.fields[field].value = ''
			}else if(this.fields[field].type === 'checkbox'){
				this.fields[field].value = []
			}else if(this.fields[field].type === 'select'){
				this.fields[field].value = ''
			}
		}
	}

	resetRec(fields){

		// for(let field in fields){

		// 	if(data.hasOwnProperty(field)){
		// 		if(data[field] == null){
		// 			continue;
		// 		}else if(data[field].constructor === Array){
		// 			data[field] = [];
		// 		}else if(typeof data[field] === 'string'){
		// 			data[field] = '';
		// 		}else if(typeof data[field] === 'number'){
		// 			data[field] = '';
		// 		}else{
		// 			this.resetRec(data[field]);
		// 		}
		// 	}
		// }

		// this.set(data);
		
	}

}