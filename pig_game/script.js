'use strict';
// initialise score
const allScoreElement = document.querySelectorAll('.score');

allScoreElement.forEach(scoreElement => {
    scoreElement.textContent = 0;
})