const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const elements = ingredients.map(ingredient => {
    const itemElement = document.createElement('li');
    itemElement.textContent = ingredient;
    return itemElement
});

const listElements = document.querySelector('#ingredients');
listElements.append(...elements);
console.log(listElements)