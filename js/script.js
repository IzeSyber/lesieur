const btnPlus = document.querySelector('.js-plus');
const conteneur= document.querySelector('.conteneurtransport');

btnPlus.addEventListener('click', fouvreferme)
function fouvreferme(){
    conteneur.classList.toggle('conteneurtransport-invisible')
}