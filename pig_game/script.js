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

// change player turn
document.querySelector('.btn--hold').addEventListener('click', function () {
    setCummulativeScore();
    switchCurrentPlayer();
})


function setDiceImageSource() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    if (diceNumber === 1) {
        resetCurrentScore();
        switchCurrentPlayer();
    }
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

function updateDOM() {
    allPlayers.forEach((player, index) => {
        if (player.classList.contains('player--active')) {
            activePlayer = `player--${index}`;
        }
    });

    // Get current score element for active player
    let activePlayerDOM = document.querySelector(`.${activePlayer}`);
    console.log(activePlayerDOM.children[1].textContent);
    let currentScoreDOM = activePlayerDOM.children[2].querySelector('.current-score');
    return currentScoreDOM;
}


function setCurrentScore() {
    let currentScoreDOM = updateDOM();
    let currentScore = Number(currentScoreDOM.textContent);
    currentScore = setDiceImageSource();
    currentScore += Number(currentScoreDOM.textContent);
    currentScoreDOM.textContent = currentScore;
    return currentScore;
}

// initialise current
function resetCurrentScore() {
    let currentScoreDOM = updateDOM();
    currentScoreDOM.textContent = 0;
    let currentScore = Number(currentScoreDOM.textContent);
}

// switch current player
function switchCurrentPlayer() {
    resetCurrentScore();

    allPlayers.forEach(player => {
        player.classList.toggle('player--active');
    })

}

function setCummulativeScore() {
    let currentScoreDOM = updateDOM();
    let aggregateScore = currentScoreDOM.parentElement.parentElement.children[1];
    let currentScore = Number(currentScoreDOM.textContent);;
    let aggregateScoreValue = Number(aggregateScore.textContent);
    aggregateScoreValue += currentScore;
    aggregateScore.textContent = aggregateScoreValue;
    console.log(aggregateScore)
}