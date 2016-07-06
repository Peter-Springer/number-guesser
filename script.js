var button = document.getElementById('guess')
var newInput = document.getElementById('input-value')
var showInput = document.querySelector('.output')
var deleteInput = document.querySelector('.clear')
var userHint = document.querySelector('.message')
debugger;
var randomNumber = Math.floor(Math.random() * 101);
var resetGame = document.querySelector('.reset');

button.addEventListener('click', function () {
  //var showMe = newInput.value;
  //showInput.innerText = showMe
  var userNum = showInput.innerText = newInput.value;
  var convertedUserNum = parseInt(userNum, 10);
  if (convertedUserNum < randomNumber) {
    return userHint.innerText = "Sorry, that guess is too low. Try a higher number."
  } if (convertedUserNum > randomNumber) {
    return userHint.innerText = "Sorry, that guess is too high. Try a lower number."
  } if (convertedUserNum === randomNumber) {
    return userHint.innerText = "Correct!"
  } 
});

deleteInput.addEventListener('click', function() {
  newInput.value = ""
});

resetGame.addEventListener('click', function () {
  showInput.innerText = ""
  newInput.value = ""
  userHint.innerText = ""
});
