
// Strict Mode

'use strict';

pi = 3.1416;
console.log(pi); // No lo mostrará por el modo estricto, debemos declarar y luego asignar

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); // El mismo caso se puede aplicar dentro de las funciones

// use strict no se puede aplicar dentro de bloques