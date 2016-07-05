var box = document.querySelector('.output')
var inputValue = document.querySelector('#input-value')
var displayGuess = document.querySelector('#guess')




displayGuess.addEventListener('click', function(){
  box.innerText = inputValue.value;
});
