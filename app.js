const txtInput = document.querySelector(".txt-input");
const txtOutput = document.querySelector(".txt-output");
const button = document.querySelector("#btn-translate");

console.log(txtInput.value)
function errorHandler(error){
  console.log("error occured",error)
  alert("Something went wrong woth the server")
}
function fetchValue(){
  console.log(txtInput.value)
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${txtInput.value}`).then(response => response.json()).then(text => txtOutput.innerText = text.contents.translated).catch(errorHandler)
}
button.addEventListener("click", fetchValue)