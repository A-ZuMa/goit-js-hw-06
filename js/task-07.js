const elements = {
    inputUsr: document.querySelector('#font-size-control'),
    txt: document.querySelector('#text')
}

elements.inputUsr.addEventListener('input', handlerInput);

function handlerInput(evt) {
    console.dir(evt.currentTarget.value);
    elements.txt.style.fontSize = `${evt.currentTarget.value}px`
}