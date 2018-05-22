// LES CLASS
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/super
// ES5
function Car(brand, color) {
	this.brand = brand;
	this.color = color;
}

var myCar = new Car("BMWW", "Rouge");
console.log(myCar);
// ajouter une fonction klaxone
Car.prototype.klaxone = function() {
	console.log('tuuuuut');
}
myCar.klaxone();

console.log('----------------------------')

// ES6
class Vehicule {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}
	klaxone() {
		console.log('tuuuut');
	}
}

let myVehicule = new Vehicule("Mercedes", "black");
console.log(myVehicule);
myVehicule.klaxone();

console.log('----------------------------')

class VoitureDeCourse extends Vehicule {
	constructor(brand,color,vitesse) {
		// super fait appel au constructor parent
		super(brand,color);
		this.vitesse = vitesse;
	}
	// ajout methode 
	turbo() {
		console.log('mise en route du turbo');
	}
	// surcharge klaxone()
	klaxone() {
		console.log("taaaat")
	}
}

let myFerrari = new VoitureDeCourse("Ferrari","rouge",250);
// herite des propriété brand et couleur, appel constructor parent
console.log(myFerrari);
// herite de methode klaxone class parente
myFerrari.klaxone();
// nouvelle methode turbo()
myFerrari.turbo();


console.log('----------------------------')

// ES6
class Supercar extends VoitureDeCourse {
	constructor(ngCylindres) {
		// super fait appel aux constructor parent
		super('Lamborgini','orange',300);
		// nouvelle propriété propre à cette class
		this.ngCylindres = ngCylindres;
	}
}

// pas besoin de passer en arg les brand et color
let mySuperCar = new Supercar(12);
console.log(mySuperCar);
// herite methode klaxone de class Vehicule
mySuperCar.klaxone();
// herite methode turbo de class VoitureDeCourse
mySuperCar.turbo();


