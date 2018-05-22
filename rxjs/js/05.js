// operateur combineLatest()
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineLatest

// combine les valeurs d'un observable avec les valeurs provenants des observables passés en argument (en prenant la valeur la plus récente des 2 observables à chaque fois qu'ils emettent des valeurs)
// utile pour renvoyer un rapport qualité/prix, un indice de masse corporelle, un rapport poids/puissance, etc...
let Observable = Rx.Observable;
const slowNums$ = Observable.interval(2000); // emet une val toutes les 1000ms : 
const fastNums$ = Observable.interval(900); // emet val toutes les 200ms

const combined$ = slowNums$
					.combineLatest(fastNums$, (s,f) => s + ' ' + f) //return une chaine
					.take(10);

combined$.subscribe(
	(value) => console.log(value),
	(err) => console.log(err),
	() => console.log('completed')
);

// -------------------•-------------------•-------------------•-------------------•    slowNums$
//               	  0                   1                   2                   3
// --------•--------•--------•--------•--------•--------•--------•--------•--------•   fastNums$
//         0        1        2        3        4        5        6        7        8
// -----------------•--------•--------•---•----•--------•-----•--•--------•-------|   combined$
//                  01       02       03  13   14       15    25 26       27      37

// appel complete() après 10 valeurs retournées 
// en résumé, à chaque valeur de slowNums est associée
// la valeur la plus récente de fastNums et à chaque valeur
// de fastNums est associé la valeur la plus récente de slowNums


// appel complete() après 10 valeurs retournées 

//autre exemple pour calcul indice de masse corporelle 
const weight$ = Observable.of(70, 72, 76, 79, 75);
const height$ = Observable.of(1.76, 1.77, 1.78);
const bmi$ = weight$.combineLatest(height$, (w, h) => w / (h * h));
bmi$.subscribe(x => console.log('BMI is ' + x));