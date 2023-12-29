'use strict'

// Selecionando elementos
 // Classes jogadores
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// ID pontos
const score0El = document.querySelector('#score--0'); //Funcionam igualmente
const score1El = document.getElementById('score--1'); //Funcionam igualmente
// ID pontos atuais
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 1;
diceEl.classList.add('hidden');
    
btnRoll.addEventListener('click', function(){
    // 1. Gerar um numero aleatorio do dado
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Mostrar o numero com as imagens do dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    //3. Checar se é um e agir conforme
    if(dice !== 1){
        // Adicionar o dado para os pontos do jogador
        currentScore += dice;
        current0El.textContent = currentScore // MUDAR DEPOIS
    } else {
        // Trocar de jogador
    }
})

