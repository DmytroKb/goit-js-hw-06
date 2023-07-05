const inptSymbols = document.querySelector('#validation-input');

inptSymbols.addEventListener('blur', handlerQuery);

function handlerQuery(evt) {

    if (evt.currentTarget.value.length === Number(inptSymbols.dataset.length)) 
    {
        inptSymbols.classList.add('valid');
        inptSymbols.classList.remove('invalid');

    } else { 
        inptSymbols.classList.add('invalid');
        inptSymbols.classList.remove('valid');

    };
};