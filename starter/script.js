'use strict';

//******queryy selector is used to select html elements based on their class names or their ID******////

const privateNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = privateNumber;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'β¨ You havent picked a number';
  } else if (guess === privateNumber) {
    document.querySelector('.message').textContent =
      'You Guessed The Correct Number';
    document.querySelector('.highscore').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = privateNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > privateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The Number You Picked is High β';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lostπ Try Again π';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < privateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The Number You Picked is Low π';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lostπ Try Again π';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  privateNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing.......';
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
});
