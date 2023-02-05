//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

const addWord = prompt("inserisci una parola")

const result = isPalindrome(addWord);
console.log(result);

function isPalindrome(word) {

    const wordLength = addWord.length;

    for (i = 0; i < wordLength / 2; i++) {

        if (addWord[i] !== addWord[wordLength - 1 - i]) {
            return `${addWord} non è palindroma`;
        }
    }
    return `${addWord} è palindroma`;
}