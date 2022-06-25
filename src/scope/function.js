
// Function Scope

function greeting() {
    let userName = "Ana"; // Acceso solamente dentro de la función
    console.log(userName);

    if (userName === "Ana") {
        console.log(`Hello ${userName}`)
    }
}

greeting();

console.log(userName); // Nos dará un error ya que la variable userName no puede ser accedida desde el Global Scope