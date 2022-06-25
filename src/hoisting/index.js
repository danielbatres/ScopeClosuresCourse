
// Var

// Hoisting: var nameOfDog; undefined

console.log(nameOfDog); // undefined

var nameOfDog = "Elmo"; // redeclaramos

console.log(nameOfDog); // Elmo

// Funciones

// Hoisting: var elmo; undefined

nameOfDogFunction(); // El mejor perrito es undefined

function nameOfDogFunction() { // Las funciones son elevadas en ejecución
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito";

// Si la variable se ejecuta sin ser declarada luego nos mostrará un error