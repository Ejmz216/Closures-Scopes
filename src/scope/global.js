//------------------- VARIABLES ---------------------------

// Declarando 
var a;

// Declaramos y Asiganamos
var b = 'b';

// Reasignar un valor
b = 'bb';

//Redeclarar 
var a = 'aa';

//--------------------- GLOBAL SCOPE -------------------------
var fruit = 'Apple'; //Global

function bestfruit() {
    console.log(fruit);
}

bestfruit();

function contries() {
    var contry = 'Colombia';
    console.log(contry);

}
contries();
// console.log(contry); --> no se puede acceder 