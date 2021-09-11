const categories = document.querySelectorAll('#categories > li');
console.log(` В списке ${categories.length} категории`)

const elementsOfCategories = [...categories];
elementsOfCategories.map(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Колличество элементов: ${element.lastElementChild.children.length}`)
})


