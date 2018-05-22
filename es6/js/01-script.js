// http://kangax.github.io/compat-table/es6/
// tableau des compatibilités es6 pour chaque navigateur

// cliquer sur flèche bleue dans le tableau pour MND web doc Mozilla
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const

// VAR LET ET CONST

// scope respecté avec let
console.log(test);
var test = "machin";
console.log(test);

if (true) {
	var test2 = "machine";
	let test3 = "truc";
}
console.log(test2);
// console.log(test3);

// les constantres
const MAN_ON_MOON = 1969;

console.log(MAN_ON_MOON);
// MAN_ON_MOON = 1968;

console.log('test');
const user = {};
user.name = 'Christophe';
// user = {name: 'Pierre'}; // Objet impossible à modifier
// user.name = 'Pierre'; // attribut possible à modifier
console.log(user);

