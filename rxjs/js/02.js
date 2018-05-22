let Observable = Rx.Observable;
// creation d'un observable
let values = Observable.create((observer) => {
	try {
		observer.next("Hello");
		observer.next("world");
		observer.complete();
	} catch(e) {
		observer.error(e);
	}
});

// s'abonner
values.subscribe(
	// 1er handler pour récupérer les data
	(data) => console.log(data),
	// 2em handler pour récupérer les erreurs
	(error) => console.log(error),
	// 3em handler pour informer complete
	() => console.log("completed !")
);

