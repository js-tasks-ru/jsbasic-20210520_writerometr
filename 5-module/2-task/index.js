function toggleText() {
let buttonHide = document.querySelector('.toggle-text-button');
let textinf = document.getElementById('text');
buttonHide.onclick = function () {
  if (textinf.hidden === false){
    textinf.hidden = true;
  }
  else {textinf.hidden = false} 
}
}
