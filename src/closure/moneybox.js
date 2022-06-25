// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`My Money Box: $${saveCoins}`); 
// }

// moneyBox(5);
// moneyBox(5);

// Los valores no serán recordados

function moneyBox()  {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`My Money Box: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

// En este caso que utilizamos un closure los valores serán recordados

const moneyBoxAna = moneyBox(); // Volvemos a instanciar nuestra función para otro caso especifico

moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);