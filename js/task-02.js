const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients') 

const element = ingredients.map((item) => { 
  const creat = document.createElement('li') 
  creat.textContent = item;
  return creat 
});

listEl.append(...element); 