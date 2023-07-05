const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body'); 
const typeColor = document.querySelector('.color'); 

btnChangeColor.addEventListener('click', handlerChange);

function handlerChange(evt) { 
  let colorRandom = `${getRandomHexColor()}`;  
  body.style.background = colorRandom; 
  typeColor.textContent = colorRandom; 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};