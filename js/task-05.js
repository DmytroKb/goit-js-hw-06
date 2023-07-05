const inputName = document.querySelector('#name-input'); 
const userName = document.querySelector('#name-output') 

inputName.addEventListener('input', handlerQuery);
function handlerQuery(evt) { 
    if (!evt.currentTarget.value.trim()) {
        userName.textContent = 'Anonymous';
    } else {
    userName.textContent = evt.currentTarget.value;
    };
};