const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const linkEl = document.createElement('li');
  linkEl.textContent = ingredient;
  linkEl.classList.add('item');


  return linkEl;
});

ingredientsEl.append(...elements);