// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

// convention de nommage : ajouter un $ en fin de variable pour indiquer qu'il s'agit d'un observable
const intervals$ = Observable.interval(500) // l'Observable emet toutes les 500ms
					.map(x => x * 10) // operateur map (comme en js sur les tableaux transforme la valeur emise en la multipliant par 10)
					.take(10); // operateur take arrete l'emission au bout de la dixième itération et appele la methode complete

intervals$.subscribe(
	(data) => console.log(data),
	(err) => console.log(err),
	() => console.log('completed')
);

// on constate la similitude avec Observable.map() et .map() de js sur les tableaux
var numbers = [0,1,2,3];
console.log(numbers.map(x => x * 10))

// exemple d'observable pour emettre tous les 100ms une lettre d'un string
let myString = "Aujourd'hui on voit les Observable avec RxJs";
const intervals2$ = Observable.timer(3000, 100) // le premier argument de l'operateur timer est le delai d'attente, le deuxième argument est l'interval
								.do(x => console.log('avant map', x)) // retourne la valeur de x à l'instant t (ici 0,1,2,3,...)
								.map(x => myString[x]) // transforme x et renvoie une lettre correspondant à sentence[0], sentence[1], sentence[2], ...
								.do(x => console.log('après map', x)) // operateur do pour debuguer et connaitre les valeurs emises par un observable quand on joue avec des flux de donnees
								.take(myString.length);

// créer un div class=container dans le html
// il faut placer la balise script après le div class=container sinon celui ci n'existera pas au moment d'executer le js
// récupérer ce div dans une constante
let container = document.querySelector('#container');
intervals2$.subscribe(
	(value) => container.innerHTML += value,
	(err) => console.log(err),
	() => console.log('completed')
);
