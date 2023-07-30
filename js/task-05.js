const elements = {
    inputUser: document.querySelector('#name-input'),
    userOutName: document.querySelector('#name-output')
}

elements.inputUser.addEventListener('input', handlerInput)

function handlerInput(evt) {
    if (elements.inputUser.value !== '') {
        elements.userOutName.textContent = evt.currentTarget.value;
    } else {
        elements.userOutName.textContent = "Anonymous"
    }
}