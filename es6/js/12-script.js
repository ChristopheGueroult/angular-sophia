// LES PROMISES 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses
"use strict";
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode
console.log('je vais à un entretient');

let myPromise = new Promise( (resolve, reject) => {
	setTimeout( () => {
		let message = 'Bravo vous êtes reçu';
		resolve(message);
		// reject('Désolé');
	}, 5000 );
});

console.log('je sort de cet entretient');

myPromise.then( (data) => {
	console.log(data);
});

console.log('Après plein de choses ');