// SPREAD OPERATOR 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition

// en js 
var fruits = ['bananes','pommes'];
var vegetables = ['poireaux','carottes'];

var food = [fruits, vegetables];
// on obtien un tableau à deux dimensions qui contient deux tableaux
console.log(food);

// obtenir un tableau avec uniquement des string provenant de deux autres tableaux 
var food2 = [...fruits, ...vegetables];
console.log(food2);

// combiner avec d'autres string
var food3 = [...fruits, ...vegetables, "navets"];
console.log(food3);

// utiliser le spread operator dans une fonction 
// en js 
var mixer = function(ingredient1, ingredient2) {
	console.log(ingredient1 + " avec " + ingredient2);
}

mixer("Pommes", "abricots");
// en es6
let mixer2 = (ingredient1, ingredient2) => console.log(ingredient1 + " avec " + ingredient2);
mixer2('Bananes', 'Poires');
// avec spread operator
let ingredients = ['Fraises', 'oranges'];
mixer2(...ingredients);

// utiliser spread operator en argument
// let mixer3 = (args) => console.log(args);// affiche Fraises
// let mixer3 = (...args) => console.log(args);// affiche tableau avec Fraise,oranges
let mixer3 = (...args) => console.log(args.join('-'));// affiche Fraise-oranges
mixer3('Fraises', 'oranges');
