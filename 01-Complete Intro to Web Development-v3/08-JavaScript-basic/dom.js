// DOM

const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = 'blue';

const header = document.querySelector('.header')
header.innerText = 'New Texs'

// Event listeners
const button = document.querySelector('.event-button');
button.addEventListener('click', function () {
  alert("Hello sir")
})

const inputText = document.querySelector('.input-text');
const paragraph = document.querySelector('.display-input-text');
inputText.addEventListener('keyup', function (params) {
  paragraph.innerText = inputText.value
})
