// CONSEGNA
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FACCIAMO SCEGLIERE AL CLIENTE UN NUMERO DA 1 A 5 E SE VUOLE PARI O DISPARI
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(`Il numero che hai scelto è:${userNumber}`);
const userOddEven = prompt("Scegli Pari o Dispari");
console.log(`Hai scelto è:${userOddEven}`);
const rndNumber = rndNumberPc (1, 5);
console.log (`Il numero che è stato scelto per il pc è:${rndNumber}`);
// ORA GENERIAMO UN NUMERO A CASO PER IL COMPUTER
function rndNumberPc (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ORA SOMMIAMO I NUMERI DELL'UTENTE E DEL PC
let somma;
somma = rndNumber + userNumber
console.log(somma);

function isOddOrEven(number) {
    if (somma % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

let result = isOddOrEven(somma)
console.log(result);

// DICHIARIAMO IL VINCITORE
if (result === userOddEven) {
    console.log("Hai Vinto");
} else {
    console.log("Mi dispiace");
}