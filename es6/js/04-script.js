// TEMPLATE STRING 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits

let speech = `Madame,

Veuillez trouver ci-dessous une liste de directives : 
	- directive 1 : ...
	- directive 2 : ...

Bien à vous,
Christophe GUEROULT.`;

console.log(speech); // formaté
document.write(speech);// non formaté
alert(speech);// formaté

// ajouter des variables dans une chaine 
let lastname = 'Martin';

let speech2 = `Madame ${lastname},

Veuillez trouver ci-dessous une liste de directives : 
	- directive 1 : ...
	- directive 2 : ...

Bien à vous,
Christophe GUEROULT.`;

console.log(speech2);

let processTemplate = (param1, param2) => {
	console.log('param1 = ', param1);
	console.log('param2 = ', param2);
}

// ici en appelant processTemplate en lui passant en argument
// notre template string sans parenthèses, on récupère dans 
// param1 un tableau de string avec comme séparateur nos variables
// et dans param2 notre variable lastname
let speech3 = processTemplate`Madame ${lastname},

Veuillez trouver ci-dessous une liste de directives : 
	- directive 1 : ...
	- directive 2 : ...

Bien à vous,
Christophe GUEROULT.`;

