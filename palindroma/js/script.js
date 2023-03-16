// CONSEGNA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const userWordChoise = prompt("Inserisci una parola e posso vedere se questa parola è palindroma oppure no :)");

if (isPali(userWordChoise)) {
    console.log(true)
} else {
    console.log(false);
}

// ORA CREIAMO LA FUNZIONE
/**
 * Description
 * @param {string} userWord
 * @returns {true || false}
 */

function isPali(userWord) {
    const reverseWord = userWord.split('').reverse().join('');
    return reverseWord === userWord;
};


