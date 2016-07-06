var button = document.getElementById('guess')
var newInput = document.querySelector('#input-value')
var showInput = document.querySelector('.output')
var deleteInput = document.querySelector('.clear')

button.addEventListener('click', function () {
  var showMe = newInput.value;
  showInput.innerText = showMe;
});

deleteInput.addEventListener('click', function() {
    showInput.innerText = ""


});
