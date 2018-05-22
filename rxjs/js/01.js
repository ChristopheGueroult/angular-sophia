let Observable = Rx.Observable;
// creation d'un observable
let values = Observable.create((observer) => {
	// push de données
	observer.next("Hello");
	observer.next("world");
	setTimeout(() => console.log('coucou'), 2000);
});

// s'abonner
values.subscribe((data) => console.log(data));

// la methode next permet de pusher des données
// la différence avec un generator es6 c'est que le generator
// retourne un iterator qui dispose lui aussi d'une methode next 
// sauf que la methode next d'un iterator pull chacune des données d'un 
// iterator alors que la methode next d'un observable push des données 

