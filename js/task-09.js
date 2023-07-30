const elements = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  spColor: document.querySelector('.color')
}

elements.button.addEventListener('click', handlerClick);

function handlerClick(evt) {
  let randomColor = getRandomHexColor();
  elements.body.style.backgroundColor = randomColor;
  elements.spColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
