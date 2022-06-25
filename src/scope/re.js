
// Reasignación y redeclaración

var firstName; // Undefined
firstName = "Daniel"; // Asignamos
console.log(firstName);

var lastName = "Batres"; // declarando asignando
lastName = "García"; // reasignación
console.log(lastName);

var secondName = "Batres"; // declarando asignando
var secondName = "García"; // redeclaración y reasignación
console.log(secondName);

// let 

let fruit = "Apple"; // declarando asignando
fruit = "Kiwi"; // reasignación
console.log(fruit);

// let fruit = "Banana"; No podemos redeclarar una variable con let

// Const

const animal = "dog"; // declarando asignando
animal = "cat"; // no podemos reasignar con la palabra reservada const
console.log(animal); // nos mostrará un error

// const animal = "Snake"; No podemos redeclarar una variable con const

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);

// La modificación de arrays si es valida con const