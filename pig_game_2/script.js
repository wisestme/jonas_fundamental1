'use strict';
// Select elements
const playerOneAggregate = document.querySelector('.score--0');
const playerTwoAggregate = document.querySelector('.score--1');
const dice = document.querySelector('.dice');
const allPlayersAggregateScore = document.querySelectorAll('.score');

dice.classList.add('hidden');

allPlayersAggregateScore.forEach(playerAggregateScore => {
    playerAggregateScore.textContent = 0;
    // console.log(playerCurrentScore);
})


