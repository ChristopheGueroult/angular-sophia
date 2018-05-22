// ARROW FUNCTIONS
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées

// en js
var greeting = function() {
	console.log("salut");
}

greeting();

// pareil mais avec une arrow function
var arrowf = () => {
	console.log("salut");
}

arrowf();

// pareil mais comme une seule instruction on peut supprimer les {}
var arrowf2 = () => console.log("salut");

arrowf2();

// ARROW FUNCTION AVEC PARAMETRE 

//  en js 
var fparam = function(firstname) {
	console.log("salut " + firstname);
}

fparam("christophe");

// avec arrow function 
var arrowfp = (firstname) => console.log("salut " + firstname);

arrowfp('christophe');

// ARROW FUNCTION AVEC DES OBJETS
// en js
var dog = {
	name: "Le chien",
	toys: ["batton","balle"],
	// method pour lister les jouets
	getToys: function() {
		this.toys.forEach(function(toy){
			// this.name ne fonctionne pas ici en js car function créé un nouveau scope
			// dans lequel this n'existe pas
			var sentence = this.name + " joue avec 1 " + toy;
			console.log(sentence);
		})
	}
}

dog.getToys();

// astuce en js (passer this dans une variable)
var dog2 = {
	name: "Le chien",
	toys: ["batton","balle"],
	// method pour lister les jouets
	getToys: function() {
		var self = this;
		this.toys.forEach(function(toy){
			var sentence = self.name + " joue avec 1 " + toy;
			console.log(sentence);
		})
	}
}

dog2.getToys();

// en es6
let dog3 = {
	name: "Mon chien",
	toys: ["batton","balle"],
	getToys: function() {
		this.toys.forEach( (toy) => {
			let sentence = this.name + "joue avec 1 " + toy;
			console.log(sentence);
		})
	}
}

dog3.getToys();
// dans une arrow function, this reste celui du parent

