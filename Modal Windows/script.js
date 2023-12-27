'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
// Note a diferenca no ALL, que seleciona todos os elementos de mesma classe
const buttonsOpenModal = document.querySelectorAll('.show-modal');

//Funcao que mostra o texto removendo o HIDDEN
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Funcao que esconde o texto adicionando o HIDDEN
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Criando o EventListener para os 3 botoes usando for
for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener('click', openModal);
}

//Como existe somente 1 botao de fechar, criamos 
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
