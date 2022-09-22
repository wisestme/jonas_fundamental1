'use strict';
// initialise game
const allScoreElement = document.querySelectorAll('.score');

allScoreElement.forEach(scoreElement => {
    scoreElement.textContent = 0;
})

const diceElement = document.querySelector('.dice');

diceElement.classList.add('hidden');

// roll dice
document.querySelector('.btn--roll').addEventListener('click', function () {
    setDiceImageSource();
    displayDice();
    setCurrentScore();
});


function setDiceImageSource() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    const diceImageSource = `dice-${diceNumber}.png`;
    diceElement.src = diceImageSource;
    return diceNumber;
}

function displayDice() {
    diceElement.classList.remove('hidden');
}

// Get active player
const allPlayers = document.querySelectorAll('.player');
let activePlayer;

allPlayers.forEach((player, index) => {
    // console.log(player.classList.contains('player--active'));
    if (player.classList.contains('player--active')) {
        activePlayer = `player--${index}`;
    }
});

// Get current score element for active player
console.log(activePlayer);
let activePlayerDOM = document.querySelector(`.${activePlayer}`);
let currentScoreDOM = activePlayerDOM.children[2].querySelector('.current-score');
let currentScore = 0;

function setCurrentScore() {
    currentScore += setDiceImageSource();
    currentScoreDOM.textContent = currentScore;
}