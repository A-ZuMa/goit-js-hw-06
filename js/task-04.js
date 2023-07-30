const elements = {
    counter: document.querySelector ('#value'),
    decBtn: document.querySelector('button[data-action="decrement"]'),
    incBtn: document.querySelector('button[data-action="increment"]')
}

elements.decBtn.addEventListener('click', handlerClick);
elements.incBtn.addEventListener('click', handlerClick);

function handlerClick(evt) {
    let counterValue = Number(elements.counter.textContent);
    let press = evt.target.dataset.action; 
    if (press === 'decrement') {
        counterValue -= 1;
    } else if (press === 'increment') {
        counterValue += 1;
    }
    elements.counter.textContent = counterValue;
}