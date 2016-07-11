var guessButton = document.getElementById('guess');
var newInput = document.getElementById('input-value');
var showInput = document.querySelector('.output');
var deleteInput = document.querySelector('.clear');
var userHint = document.querySelector('.message');
var resetGame = document.querySelector('.reset');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');
var maxNum = 100;
var minNum = 1;
var randomNumber = numGenerator();
var rangeButton = document.querySelector('.set-min-max');


function numGenerator() {
  return Math.floor(Math.random() * (maxNum-minNum) + minNum);
}

function alterRange() {
  maxNum += 10;
  minNum -= 10;
}

function resetRange() {
  minNum = parseInt(minInput.value = 1);
  maxNum = parseInt(maxInput.value = 100);
  maxInput.value = "";
  minInput.value = "";
}

guessButton.addEventListener('click', function () {
  deleteInput.disabled = false;
  resetGame.disabled = false;

  showInput.innerText = newInput.value;
  var userNum = newInput.value;
  var convertedUserNum = parseInt(userNum, 10);

  if (newInput.value.length > 8) {
    showInput.innerText = "😡"
    return userHint.innerText = ""
  }
  if (convertedUserNum > maxNum || convertedUserNum < minNum) {
    return userHint.innerText = "Please guess a number between " + minNum + "-" + maxNum + "."; }

  if (convertedUserNum < randomNumber) {
    return userHint.innerText = "Sorry, that guess is too low. Try a higher number.";}

  if (convertedUserNum > randomNumber) {
    return userHint.innerText = "Sorry, that guess is too high. Try a lower number.";}

  if (convertedUserNum === randomNumber) {
    alterRange();
    randomNumber = numGenerator();
    return userHint.innerText = "Correct!, try it again the MIN and MAX range has increased and decreased by 10";}

  if (isNaN(parseInt('newInput.value'))){
    return userHint.innerText = "Sorry, your guess is not a number.";}
});

deleteInput.addEventListener('click', function() {
  newInput.value = "";
  deleteInput.disabled = true;
});

resetGame.addEventListener('click', function () {
  deleteInput.disabled = true;
  resetGame.disabled = true;
  guessButton.disabled = false;
  rangeButton.disabled = false;
  showInput.innerText = "";
  newInput.value = "";
  userHint.innerText = "";
  minInput.value = "";
  maxInput.value = "";
  resetRange();
  randomNumber = numGenerator();
});


rangeButton.addEventListener('click', function () {
  minNum = parseInt(minInput.value);
  maxNum = parseInt(maxInput.value);
  if (minNum > maxNum) {
    guessButton.disabled = true;
    resetGame.disabled = false;
    rangeButton.disabled = true;
    return userHint.innerText = "Please enter a valid range.";
  }
  randomNumber = numGenerator();
});
