// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set/entries

// un itérator permet de récupérer une collection 
let fruits = new Set();
fruits.add('pommes').add('poires');
let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);

// génère un SetIterator qui contient les clé et valeurs
// clé et valeurs portent le même nom dans un Set()

// methode next pour parcourir l'entrée suivante sur un SetIterator
console.log(fruitsIteratorEntries.next());
// récupère la première ligne du SetIterator dans un objet
// avec une propriété value qui contient un tableau avec 2 ligne pour la clé et la valeurs
// et une propriété done qui contient false car il reste des entrées a extraire du SetIterator

console.log(fruitsIteratorEntries.next());
// idem pour la deuxième entrée du SetIterator

console.log(fruitsIteratorEntries.next());
// propriété value prend undefined
// propriété done prend true

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map/entries
let fruitsMap = new Map();
fruitsMap.set('fruit1', 'banabes');
fruitsMap.set('fruit2', 'oranges');

let fmi = fruitsMap.entries();
console.log(fmi);
// retourne un MapIterator qui contient les ensembles clé/valeur du Map()

console.log(fmi.next());
// retourne un objet avec propriété value et propriété done
// value contient tableau de 2 lignes avec la clé et la valeur
// done contient false tant qu'il reste des entrées à itérer
if (fmi.next().done) {
	console.log('itération terminée')
}
console.log(fmi.next());
// idem pour deuxième entrée du Map()

if (fmi.next().done) {
	console.log('itération terminée')
}

console.log(fmi.next());
// value contient undefined 
// done vaut true

