const list = document.querySelector('#categories');
const item = document.querySelectorAll('.item');

console.log("Number of categories: ", list.childElementCount);
item.forEach(function (elem) {
    console.log("Category: ", elem.firstElementChild.textContent);
    console.log("Elements: ", elem.lastElementChild.children.length);
});
