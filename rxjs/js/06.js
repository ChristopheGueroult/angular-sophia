// operateur withLatestFrom
// combine un observable avec d'autres observables en créant un observable
// dont les valeurs sont calculées depuis les dernières valeurs 
// de chaque observable, uniquement quand m'observable source emet une valeur (ici slowNums)
let Observable = Rx.Observable;
const slowNums$ = Observable.interval(2000); // emet une val toutes les 1000ms : 
const fastNums$ = Observable.interval(900); // emet val toutes les 200ms

const combined$ = slowNums$
					.withLatestFrom(fastNums$, (s,f) => s + ' ' + f) //return une chaine
					.take(10);

combined$.subscribe(
	(value) => console.log(value),
	(err) => console.log(err),
	() => console.log('completed')
);

// -------------------•-------------------•-------------------•-------------------•-------------------•-------------------•------------------•-------------------•-------------------•-------------------•   slowNums$
//               	  0                   1                   2                   3                   4                   5                  6                   7                   8                   9
// --------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•--------•-   fastNums$
//         0        1        2        3        4        5        6        7        8        9        10       11       12       13       14       15       16       17       18       19       20       21
// -------------------•-------------------•-------------------•-------------------•-------------------•-------------------•------------------•-------------------•-------------------•-------------------•   combined$
//                    01                  13                  25                  37                 310                 512                614                 716                 818                 921

// appel complete() après 10 valeurs retournées 

// en résumé, à chaque valeur de slowNums est associé 
// la dernière valeur connue de fastNums
