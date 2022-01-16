var animals = [
	"aligator",
	"alpaca",
	"ant",
	"albatros",
	"antelope",
	"badger",
	"baboon",
	"beagle",
	"bear",
	"bobfish",
	"buffalo",
	"bullfrog",
	"cat",
	"centipede",
    "chimpanzee",
	"chipmunk",
	"catfish",
	"cockroach",
	"carp",
	"cockapoo",
	"crab",
	"cow",
	"crab",
	"doneky",
	"dragonfly",
	"dodo",
	"dolphin",
	"elephant",
    "fox",
	"flamingo",
	"goat",
	"groundhog",
	"hamster",
	"hedgehog",
	"horsefly",
	"hummingbird",
	"iguana",
	"jackal",
	"kangaroo",
	"koala",
	"leopard",
	"lemming",
    "meagle",
	"millipede",
	"mudpuppy",
	"newfypoo",
	"panther",
	"peacock",
	"piranha",
	"penguin",
	"prawn",
	"rabbit",
	"raccoon",
	"rattlesnake",
	"reindeer",
	"salmon",
    "sheep",
	"seahorse",
	"sparrow",
	"tiger",
	"swan",
	"turkey",
	"whale",
	"walrus",
	"whippet",
	"weasel",
	"wolffish",
	"zebra",
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomAnimal() {
  answer = animals[Math.floor(Math.random() * animals.length)];
}

function createButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedAnimal();
    checkIfWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Yay! You Won! :)';
  }
}

function checkIfLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Sorry! You lost! :(';
  }
}

function guessedAnimal() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomAnimal();
  guessedAnimal();
  updateMistakes();
  createButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomAnimal();
createButtons();
guessedAnimal();s