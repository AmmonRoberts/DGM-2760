const correctNumber = Math.floor(Math.random() * 15);
let guessed = false;
let totalGuesses = 0;
let guess = -1;

function evaluateGuess() {
    totalGuesses++;
    guess = document.querySelector('#guess').nodeValue;

    const feedback = document.querySelector('#feedback');


}