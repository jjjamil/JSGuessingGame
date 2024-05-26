const randomNumber = function () {
  let num = Math.floor(Math.random() * 24 + 1);
  return num;
};

const resetGame = function () {
  const score = document.getElementById('score');
  score.textContent = '0';
  const remaining = document.getElementById('remaining');
  remaining.textContent = '2';
  randomNum = randomNumber();
};

const playAgain = function () {
  let playAgainBtn = document.getElementById('playAgainBtn');
  playAgainBtn.addEventListener('click', () => {
    console.log('click');
    document.getElementById('modalPlay').style.display = 'none';
    document.getElementById('guess-input').removeAttribute('disabled');
    resetGame();
  });
};

const remainingGuess = function () {
  const remaining = document.getElementById('remaining');
  const modal = document.getElementById('modalPlay');
  let getRemainingGuess = Number(remaining.textContent) - 1;
  remaining.textContent = getRemainingGuess;
  if (getRemainingGuess === 0) {
    modal.style.display = 'block';
    document.getElementById('guess-input').disabled = 'true';
  }
  playAgain();
  return getRemainingGuess;
};

const guessInput = document.getElementById('guess-input');
let score = document.getElementById('score');
let randomNum = randomNumber();
console.log('initial number: ', randomNum);

let guessInputVal = guessInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    let guessIntputToNum = Number(guessInput.value);
    let addScore = parseInt(score.textContent) + 1;
    if (guessIntputToNum === randomNum) {
      console.log('this is correct');
      randomNum = randomNumber();
      guessInput.value = '';
      score.textContent = addScore;
      console.log('new random num: ', randomNum);
    } else {
      console.log('wrong guess');
      guessInput.value = '';
      remaining = remainingGuess();
    }
  }
});
