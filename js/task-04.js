const BtnDecEl = document.querySelector('[data-action="decrement"]');
const valEl = document.querySelector('#value');
const BtnIncEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const handleBtnDecClick = function() {
    counterValue -= 1;
    valEl.textContent = counterValue;
}

const handleBtnIncClick = function() {
    counterValue += 1;
    valEl.textContent = counterValue;
}

BtnDecEl.addEventListener('click', handleBtnDecClick);
BtnIncEl.addEventListener('click', handleBtnIncClick);