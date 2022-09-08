'use strict';
/*console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'enter a number 🦾';

document.querySelector('.number').textContent = 'G';

document.querySelector('.guess').value = 23;
*/

//******queryy selector is used to select html elements based on their class names or their ID******////

const privateNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').value = privateNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '♨ You havent picked a number';
  } else if (guess === privateNumber) {
    document.querySelector('.message').textContent =
      'You Guessed The Correct Number';
  } else if (guess > privateNumber) {
    document.querySelector('.message').textContent =
      'The Number You Picked is High ☝';
    score;
    document.querySelector('.score').te;
  } else if (guess < privateNumber) {
    document.querySelector('.message').textContent =
      'The Number You Picked is Low 👇';
  }
});
