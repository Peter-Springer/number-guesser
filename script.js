var button = document.getElementById('guess');
var newInput = document.getElementById('input-value');
var showInput = document.querySelector('.output');
var deleteInput = document.querySelector('.clear');
var userHint = document.querySelector('.message');
var resetGame = document.querySelector('.reset');
var randomNumber = numGenerator();
var rangeButton = document.querySelector('.set-min-max');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');


function numGenerator() {
  return Math.floor(Math.random() * 101);
}

button.addEventListener('click', function () {
  deleteInput.disabled = false;
  resetGame.disabled = false;
  var userNum = showInput.innerText = newInput.value;
  var convertedUserNum = parseInt(userNum, 10);

  if (convertedUserNum >= 101 || convertedUserNum <= 0) {
    return userHint.innerText = "Please guess a number between 1-100.";
  }else if (convertedUserNum < randomNumber) {
    return userHint.innerText = "Sorry, that guess is too low. Try a higher number.";
  } else if (convertedUserNum > randomNumber) {
    return userHint.innerText = "Sorry, that guess is too high. Try a lower number.";
  } else if (convertedUserNum === randomNumber) {
    return userHint.innerText = "Correct!";
  } else if (isNaN(parseInt('newInput.value'))){
    return userHint.innerText = "Sorry, your guess is not a number.";
  }
});

deleteInput.addEventListener('click', function() {
  newInput.value = "";
  deleteInput.disabled = true;
});

resetGame.addEventListener('click', function () {
  deleteInput.disabled = true;
  resetGame.disabled = true;
  showInput.innerText = "";
  newInput.value = "";
  userHint.innerText = "";
  randomNumber = numGenerator();
});

rangeButton.addEventListener('click', function () {
  var setMin = minInput.value;
  var setMax = maxInput.value;
  button.style[setMin] = setMax;
});
