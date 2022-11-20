function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amount = document.querySelector('#controls input').value;
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
// console.log(inputEl);

btnCreate.addEventListener('click', onCreateBoxes);

function onCreateBoxes(amount) {

  let sizeEl = 30;


  
  let fragment = document.createDocumentFragment();
for (let i = 0; i < amount; i++) {
  let size = sizeEl + i * 10;
  let div = document.createElement('div');
  
  div.style.width = `${sizeEl}px`;
    div.style.height = `${sizeEl}px`;
    sizeEl += 10;
    div.style.backgroundColor = getRandomHexColor()
    // div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} , ${getRandomHexColor()} , ${getRandomHexColor()} )`;
    fragment.appendChild(div);
  }

  }
