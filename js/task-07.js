const rangeInput = document.querySelector('#font-size-control');
const txtOutput = document.querySelector('#text');

txtOutput.style.fontSize = `${rangeInput.value}px`
rangeInput.addEventListener('input', handlerRange);

function handlerRange(evt) {
    txtOutput.style.fontSize = `${evt.target.value}px`
};