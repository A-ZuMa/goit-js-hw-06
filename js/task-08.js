const elements = {
    formUsr: document.querySelector('.login-form')
}

elements.formUsr.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    // console.log(email.value);
    // console.log(password.value);
    if (email.value === '' || password.value === '') {
        return alert ("Всі поля повинні бути заповнені")
    }
    let resultForm = {
        email: email.value,
        password: password.value
    }
    console.log(resultForm);
    elements.formUsr.reset()
}