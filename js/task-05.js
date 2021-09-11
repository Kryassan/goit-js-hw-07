const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', inputArea);

function inputArea(event) {
    let value = nameInput.value;
    if (value === '') {
        nameOutput.textContent = 'незнакомец';
    }
    nameOutput.textContent = value;
}