// SET 
// type de données qui permet de stocker n'importes quelles valeur 
// de façon unique (sans doublons)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set

// la méthode add pour ajouter des données dans un Set() qui ne prend pas de doublons
let brands = new Set();
brands.add('Honda')
	.add('Ducati')
	.add('Triomph')
	.add('Honda')
	.add('Kawazaki');

console.log(brands);
// on constate que Honda n'apparait qu'une seule fois

// utiliser Set() pour créer un tableau à partir d'un autre 
// tableau mais sans doublons
let brandsArray = ['Honda','Ducati','Triomph','Honda','Kawazaki'];
let brands2 = new Set(brandsArray);
console.log(brands2);

// la methode has pour tester si un Set() contient une valeur
console.log(brands.has('Honda'));
console.log(brands.has('honda')); // case sensitive

// methode delete() pour supprimer un element d'un Set()
console.log(brands.delete('Kawazaki')); //true
console.log(brands.delete('honda')); // false car case sensitive
console.log(brands); // Kawazaki supprimé

// methode clear pour vider complètement un Set()
console.log(brands.clear()); // affiche undefined
console.log(brands); // Set vidé mais pas supprimé

// methode forEach() pour lister le contenu d'un Set()
brands2.forEach(function(val) {
	console.log(val);
})

// lister le contenu d'un Set() et ses clés, attention un set n'a pas proprement de clé, il donne aux clés la meme valeur que la valeur 
brands2.forEach(function(val, val2) {
	console.log(val);
	console.log(val2);
})
// ici les clés portent le même nom que les valeurs

// lister le contenu d'un Set() et (ses clés) et le set lui-meme
brands2.forEach(function(val, val2, val3) {
	console.log(val);
	console.log(val2);
	console.log(val3);
})

// methode values() pour lister toutes les valeurs
console.log(brands2.values())
// methode values() pour lister toutes les clés
console.log(brands2.entries())




