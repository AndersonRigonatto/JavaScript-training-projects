'use strict';

// Selecionando elementos
// Classes jogadores
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// ID pontos
const score0El = document.querySelector('#score--0'); //Funcionam igualmente
const score1El = document.getElementById('score--1'); //Funcionam igualmente
// ID pontos atuais
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // Começando com o jogador 1
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  // Trocar de jogador
  // Ao trocar de jogador, tenho que tirar a pontuacao atual e passar
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Isto vai server para a UI
  //toggle => se tiver tira, se nao tiver coloca
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Gerar um numero aleatorio do dado
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Mostrar o numero com as imagens do dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Checar se é um e agir conforme
    if (dice !== 1) {
      // Adicionar o dado para os pontos do jogador
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Trocar jogador
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Adicionar pontuacao atual para jogador
    scores[activePlayer] += currentScore;
    const score0El = document.querySelector('#score--0'); //Funcionam igualmente

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Checar se a pontuacao do jogador >= 100
    // Jogador ganha
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // trocar jogador
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
