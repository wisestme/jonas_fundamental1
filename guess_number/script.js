'use strict';
// document.querySelector('.message').textContent = 'Start guessing ready ???';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.guess').value = '7';
// document.querySelector('.score').textContent = '15';

let score = Number(document.querySelector('.score').textContent);

function setSecretNumber() {
    return Math.floor(Math.random() * 20);
}
let secretNumber = setSecretNumber();
// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.highscore').textContent = 0;
let highScore = Number(document.querySelector('.highscore').textContent);

function setHighScore() {
    document.querySelector('.highscore').textContent = score;
    highScore = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ choose a number above zero'
    } else {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 congrats...';
            document.querySelector('body').style.backgroundColor = 'Green';
            score = Number(document.querySelector('.score').textContent);
            console.log(highScore, score);
            if (highScore < score) {
                setHighScore();
            } else if (highScore == 0) {
                setHighScore();
            } else {
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '❌❌❌❌ too high';
            reduceScore();
        } else {
            document.querySelector('.message').textContent = '❌❌❌❌ too low';
            reduceScore();
        }
    }
})


function reduceScore() {
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
        document.querySelector('.message').textContent = '😜😜😜 You lost';
    }
}

function resetParameters() {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = '';
    secretNumber = setSecretNumber();
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('body').style.backgroundColor = 'black';

}

document.querySelector('.again').addEventListener('click', function () {
    resetParameters();
})