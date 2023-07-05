const buttonDecrement = document.querySelector('#counter button[data-action="decrement"]'); // Підключаємо за допомогою ід та атрибуту button мінус

const buttonIncrement = document.querySelector('#counter button[data-action="increment"]'); 
const spanCounter = document.querySelector('#value'); 
let count = 0; 

buttonDecrement.addEventListener('click', sub);
function sub() {
    count = count - 1;
    spanCounter.textContent = count;
};

buttonIncrement.addEventListener('click', add);
function add() { 
    count = count + 1;
    spanCounter.textContent = count;
};