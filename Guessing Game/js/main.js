let correctNumber;
let guessed = false;
let totalGuesses = 0;
let guess = -1;

document.querySelector('#assignmentName').innerText = "Guessing Game";

function startGame() {
    correctNumber = Math.floor(Math.random() * 15);
    correctNumber++;
    console.log(correctNumber);

}

function evaluateGuess() {
    guess = document.querySelector('#guess').value;

    const feedback = document.querySelector('#feedback');

    if (guess == correctNumber) {
        feedback.innerText = "You got it!";
        totalGuesses++;
        giveAward();
        let button = document.querySelector('#guessButton');
        button.setAttribute("disabled", "");

    } else if (guess > correctNumber && guess < 16) {
        feedback.innerText = "Too high, try again";
        totalGuesses++;
    } else if (guess < correctNumber && guess > 0) {
        feedback.innerText = "Too low, try again";
        totalGuesses++;
    } else {
        feedback.innerText = "Guess must be between 1 and 15";
    }
    document.querySelector('#attempts').innerText = totalGuesses;
}

function giveAward() {
    let imagePath = '#';
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/gold.png';
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/silver.png';
            break;
        default:
            imagePath = 'images/bronze.png';
            break;

    }
    const awardImage = document.createElement('img');
    awardImage.setAttribute('src', imagePath)
    const medal = document.querySelector('#award');
    award.appendChild(awardImage);


}

window.onload = function () {
    startGame();
}