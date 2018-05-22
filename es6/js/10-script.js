//  GENERATOR
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*

// permet de créer une fonction que l'on peut mettre sur pause et redémarrer à l'endroit ou on l'avait mis sur pause

function* misc() {
	let a = 10;
	let b = 15;
	console.log(a+b);
	yield;
	console.log('atteint à la deuxième éxécution');
	yield;
	console.log("atteint à la troisième éxécution");
}
// un generator retourne un iterator

let miscIterator = misc();
// on peut utiliser la methode next() sur un iterator
miscIterator.next(); // affiche 25

miscIterator.next(); // affiche 'atteint à la deuxième éxécution'

miscIterator.next(); // affiche 'atteint à la troisième éxécution'

// créer une fonction génératrice (generator) pour faire décoller une fusée
function* decoller() {
	yield 'trois';
	yield 'deux';
	yield 'un';
	yield 'zéro';
	yield 'décollage';
}
// récupérer l'itérator dans une variable
let itr = decoller();

// setInterval pour l'appeler toutes les secondes
let handle = setInterval( () => {
	var instruction = itr.next();
	if (instruction.done) {
		clearInterval(handle)
	} else {
		console.log(instruction)
	}
}, 2000 )
