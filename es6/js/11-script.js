// BOUCLE FOR OF 
//  itère sur les valeurs alors que for in itère sur les clés

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of

let fruits = ['pommes','poires','banes'];

// for in ES5
for (var fruit in fruits) {
	console.log(fruit); //affiche 0,1,2
}

// for of ES6
for (let fruit of fruits) {
	console.log(fruit); //affiche pommes, poires, banabes
}

console.log('-----------------------------');
// sur les Set()

let fruitsSet = new Set();
fruitsSet.add('pommes').add('poires').add('bananes');

for (let fruit in fruitsSet) {
	console.log(fruit); //affiche rien car un set n'a pas de clé
}

for (let fruit of fruitsSet) {
	console.log(fruit); //affiche pommes poires bananes
}

console.log('-----------------------------');
// sur les Map()

let fruitsMap = new Map();
fruitsMap.set('un','pommes').set('deux','poires').set('trois','bananes');

for (let fruit in fruitsMap) {
	console.log(fruit); //affiche rien car notre Map contient des array
}

for (let fruit of fruitsMap) {
	console.log(fruit); //affiche trois array
	console.log(fruit[0]); //affiche un deux trois
	console.log(fruit[1]); //affiche pommes poires bananes
}

console.log('-----------------------------');

let chaine = new String();
chaine = 'bonjour les zamis';
console.log(chaine);

for (let letters in chaine) {
	console.log(letters); //affiche toutes index des lettres
}
for (let letters of chaine) {
	console.log(letters); //affiche toutes les lettres du string
}