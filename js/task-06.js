const validInput = document.querySelector('#validation-input');
const dataLength = Number(validInput.getAttribute('data-length'));

validInput.addEventListener('blur', blurInputArea);

function blurInputArea() {
    if (dataLength === validInput.value.length) {
        validInput.classList.remove = ('invalid')
        validInput.classList = ('valid')
    } else {
         validInput.classList.remove = ('valid')
        validInput.classList = ('invalid')
    }
}