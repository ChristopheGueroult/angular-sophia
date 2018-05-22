// operateur zip
// crée un observable qui retourne les valeurs combinées de l'observable
// sur lequel l'operateur est appelé avec les valeurs de chaque observable passés 
// en argument dans l'ordre des valeurs
let Observable = Rx.Observable;
const slowNums$ = Observable.interval(2000); // emet une val toutes les 1000ms : 
const fastNums$ = Observable.interval(900); // emet val toutes les 200ms

const combined$ = slowNums$
					.zip(fastNums$, (s,f) => s + ' ' + f) //return une chaine
					.take(10);

combined$.subscribe(
	(value) => console.log(value),
	(err) => console.log(err),
	() => console.log('completed')
);

// -------------------|-------------------|-------------------|-------------------|-------------------|-------------------|------------------|-------------------|-------------------|-------------------|   slowNums$
//               	  0                   1                   2                   3                   4                   5                  6                   7                   8                   9
// --------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|-   fastNums$
//         0        1        2        3        4        5        6        7        8        9        10       11       12       13       14       15       16       17       18       19       20       21
// -------------------|-------------------|-------------------|-------------------|-------------------|-------------------|------------------|-------------------|-------------------|-------------------|   combined$
//                    00                  11                  22                  33                  44                  55                 66                  77                  88                  99

// appel complete() après 10 valeurs retournées 

// en résumé, à chaque valeur de slowNums est associé 
// la valeur de fastNums dans l'ordre (0-0, 1-1, 2-2, ...)
// combined emet toutes les 2000ms car il prend le rythme du 
// plus lent des 2 observables (n'irait pas plus vite si opérateur 
// zip était appelé sur fastNums)

// exemple : combiner âge et nom depuis différentes sources
let age$ = Observable.of(27, 25, 29);
let name$ = Observable.of('Jack', 'Sylvie', 'Christophe');
let isDev$ = Observable.of(true, true, false);

Observable
    .zip(age$,
         name$,
         isDev$,
         (age, name, isDev) => ({ age, name, isDev })) //return un objet
    .subscribe(
    	// x => console.log(x)
    	(x) => console.log(x),
    	(err) => console.log(err),
    	() => console.log('completed')
    );

// On constate que complete est appelée
