
// Block Scope: Todo lo que definamos dentro de corchetes {}

function fruits() {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope

        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1); // var toma el concepto de function scope
    console.log(fruit2); // let toma el concepto de block scope
    console.log(fruit3); // const toma el concepto de block scope
}

fruits();

// No utilizar var