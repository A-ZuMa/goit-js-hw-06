const elements = {
    inputUser: document.querySelector('#validation-input'),
}

elements.inputUser.addEventListener('blur', handlerInput);

function handlerInput(evt) {
    
    if (evt.currentTarget.value.length <= evt.target.dataset.length) {
        elements.inputUser.classList.remove("valid")
        elements.inputUser.classList.add("invalid")
        // console.log("No");
    } else {
        elements.inputUser.classList.remove("invalid")
        elements.inputUser.classList.add("valid")
        // console.log("Okay");
    }
}