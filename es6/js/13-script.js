// METHODE OBJECT.ASSIGN
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/assign

let sam = {
	job: 'développeur',
	language: 'javascript'
};
// Object.assign pour dupliquer un objet à partir d'un objet
let clone = Object.assign( {}, sam );

console.log("sam", sam);
console.log("clone", clone);

clone.job = 'concepteur';

console.log("clone", clone);

let contry = {
	contry: 'France',
};

console.log('-----------------------');
// Object.assign pour dupliquer un objet à partir de plusieurs objets

let clone2 = Object.assign( {}, sam, contry );
console.log('clone2', clone2);


console.log('-----------------------');

class Employe {
	
	constructor() {
		this.job = 'dev';
		this.language = 'html';
	}
	developper() {
		console.log('je peux développer des programmes');
	}
}

let tom = new Employe();

class Manager extends Employe {
	constructor() {
		super();
		this.service = 'direction informatique';
	}
	manager() {
		console.log('je peux manager une équipe de devs');
	}
}

let julie = new Manager();

console.log('tom', tom);
console.log('julie', julie);

// utiliser Object.assign() pour cloner julie
let clone3 = Object.assign( {}, julie );

console.log('clone3', clone3);
// on constate que julie hérite bien des propriétés et méthodes de Employe
// on constate que clone3 ne contient que les propriétés de Manager
// Object.assign ne copie pas les méthodes
// Object.assign ne copie que les propriété propres et énumérables




