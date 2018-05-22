// DESTRUCTURING
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition
// en ES5 
var fruits = ['pommes', 'bananes', 'poires', 'fraises'];
console.log(fruits[0]);
console.log(fruits[2]);

// en ES6
let [apples,,,strawberries] = ['pommes', 'bananes', 'poires', 'fraises'];
console.log(apples);
console.log(strawberries);
// on récupère des variables en fonction de la position
// en mettant des virgules pour sauter des ligne dans le tableau
// on doit utiliser les les [] parce qu'on veut récupérer les 
// lignes d'un tableau



// en ES5 
var dog = {
	name: 'Le chien',
	age: 1,
	color: 'noir'
};
console.log(dog.name);
console.log(dog.color);

// en ES6
let {name,color} = {
	name: 'Le chien',
	age: 1,
	color: 'noir'
}
console.log(name);
console.log(color);
// ici on utilise les {} pour extraire 2 variables car il s'agit d'un objet
// ici ce n'est pas la position qui est prise en compte mais le nom d'une propriété d'objet
