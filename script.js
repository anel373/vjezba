'use strict';
/*
//DOOM
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number!');

    //when player wins
  } else if (guess === number) {
    displayMessage('It is correct.');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is different
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? 'It is a little bit to high.'
          : 'It is a little bit to low.'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
