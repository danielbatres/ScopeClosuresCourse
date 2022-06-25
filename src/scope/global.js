
// Variables

var a; // declarando
var b = "b"; // declaramos y asignamos

b = "bb"; // re-asignando 
var a = "aa"; // re-declarando y re-asignando

// Global Scope

var fruit = "Apple"; // global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Cuando no declaramos una variable dentro de una función, automaticamente se convierte en global

function countries() {
    country = "El Salvador"; // Asignación sin declaración}
    console.log(country);
}

countries();
console.log(country);