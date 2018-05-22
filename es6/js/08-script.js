// MAP
// type de structure de données qui permet de stocker des ensembles de clé / valeur
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map

let books = new Map();
// le memthode set pour ajouter un ensemble clé/valeur
books.set('Umberto Eco','Le nom de la rose');
console.log(books);
books.set('Michel Tournier','Le roi des aulnes');
console.log(books);
// propriété size pour récupérer la taille de Map()
console.log(books.size);

// methode get pour lire valeur d'un Map() en lui passant une clé
console.log(books.get('Umberto Eco'));

console.log("--------------------");

// methode forEach pour lister un Map()
books.forEach(function(val, cle, map) {
	console.log(cle);
	console.log(val);
	console.log(map);
})
// dans un forEach sur un map, le premier argument récupère tjrs
// la valeur, le deuxième récupère la clé, le troisième récupère 
// le Map() lui même

// dans la console de chrome, cliquer sur le cercle barré pour 
// saisir du js directement dans la console. on va créer un nouveau 
// Map() puis bénéficier de l'auto-complétion directement dans 
// la console pour voir toutes les méthodes.
console.log("--------------------");
console.log(books.keys());
console.log(books.values());
console.log(books.entries());
// ces trois methodes génèrent des itérator que nous allons voir
// dans la lecon suivante