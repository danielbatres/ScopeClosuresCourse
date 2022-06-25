const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    // closure

    function parent() { // funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal); // ámbito léxico
        }

        return child();
    }

    return parent();
}

myFunction();