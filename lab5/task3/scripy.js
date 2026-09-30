let count = 0;

const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

plusButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
