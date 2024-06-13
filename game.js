let randomNumber = Math.floor(Math.random() * 100) + 1;

function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    let message;
    if (guess === randomNumber) {
        message = 'Congratulations! You guessed the right number.';
        randomNumber = Math.floor(Math.random() * 100) + 1; // Reset the game
    } else if (guess < randomNumber) {
        message = 'Too low! Try again.';
    } else {
        message = 'Too high! Try again.';
    }
    document.getElementById('game-result').innerText = message;
}
