const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = number;
// document.querySelector('.number').textContent = number;
console.log(document.querySelector('.number').value);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number detected';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'That is a correct number';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = score;
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'The number is too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'The number is too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
