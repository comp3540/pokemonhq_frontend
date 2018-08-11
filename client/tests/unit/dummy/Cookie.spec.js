import {getToken, tokenIsset} from '../../src/utilities/auth/Cookie.js';

test('getToken function', () => {
	var cookies = "token = Cats are soft; they purr; I love my cat friends";
	var result;
	function getToken(cookies){
		expect(result).tobe("Cats are soft");
	}
	var cookies = "Cats are soft; they purr; I love my cat friends";
	function getToken(cookies){
		expect(result).tobe('');
	}
})

test('tokenIsset function', () => {
	var exists;
	var cookies = "token = Cats are soft; they purr; I love my cat friends";
	function tokenIsset(cookies){
		expect(exists).tobe(true);
	}
	var cookies = "Cats are soft; they purr; I love my cat friends";
	function tokenIsset(cookies){
		expect(exists).tobe(false);
	}
})