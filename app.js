const txtInput = document.querySelector(".txt-input");
const txtOutput = document.querySelector(".txt-output");
const button = document.querySelector("#btn-translate");

const userInput = txtInput.value
console.log(userInput)

function fetchValue(){
  fetch('https://api.funtranslations.com/translate/minion.json?text=\'siek')
}
button.addEventListener("click", fetchValue)