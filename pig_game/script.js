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
});


function setDiceImageSource() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    const diceImageSource = `dice-${diceNumber}.png`;
    diceElement.src = diceImageSource;
}

function displayDice() {
    diceElement.classList.remove('hidden');
}



