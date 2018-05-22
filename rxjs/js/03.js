// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator


let Observable = Rx.Observable;
// creation d'un observable avec l'opérateur of
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of
let values = Observable.of('Hello', 'world', 2017);

// s'abonner
values.subscribe(
	// 1er handler pour récupérer les data
	(data) => console.log(data),
	// 2em handler pour récupérer les erreurs
	(error) => console.log(error),
	// 3em handler pour informer complete
	() => console.log("completed !")
);

// l'opérateur of créé un observable qui emet toutes les valeurs 
// passées en argument les unes après les autres et qui termine par emettre 
// une notification pour le complete

// créer un observable à partir d'un tableau avec l'opérateur from 
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-from
// on peut créer un observable depuis un tableau, un objet, une promise, un autre observable
let fruitsArray = ['pommes', 'fraises', 'bananes'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
	(fruit) => console.log(fruit),
	(error) => console.log(error),
	() => console.log('completed !')
);

// créer un observable avec opérateur from depuis une promise
// on va utiliser l'api github pour récupérer les emojis
// https://api.github.com/emojis
// puis la methode $.getJSON de jQuery qui retourne une promise pour la transformer en observable

let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));

emojisObservable.subscribe(
	(emojis) => console.log(emojis),
	(error) => console.log(error),
	() => console.log('completed !')
);





