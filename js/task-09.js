function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');


colorBtn.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = `${getRandomHexColor()}`;

}

