const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

// function createMarkup(arr) {
//   // console.log(arr);
//   const markup = arr.map(element => {
//     const li = document.createElement('li');
//     li.classList.add("item");
//     // li.textContent = item;
//     li.append(element);
//     return li;
//   });
//   console.log(markup);

//   list.append(...markup)
// }

// createMarkup(ingredients)

function createMarkup(arr) {
  const markup = arr.map((element) =>
    `<li class="item">${element}</li >`).join('')
 
    console.log(markup);
  list.insertAdjacentHTML('beforeend', markup)
  };

createMarkup(ingredients)