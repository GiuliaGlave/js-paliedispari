//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
//Dichiariamo chi ha vinto.


let userChoice = prompt("pari o dispari?");

console.log(userChoice);

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNumber);

let pcNumber = randomNumber();
console.log(pcNumber);

// somma 
let sum = pcNumber + userNumber;

if (game(sum) == userChoice) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}


function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

function game(number) {
    if (number % 2 == 0) {
        console.log(`${sum} è pari`);
        return "pari";
    }
    console.log(`${sum} è dispari`);

    return "dispari";
}