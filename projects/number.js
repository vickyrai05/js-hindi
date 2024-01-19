let randomNumber = (parseInt(Math.random() * 100 + 1));
console.log(randomNumber)
const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrhi")
const startover = document.querySelector(".resultParas")

const p = document.createElement("p")


let prevGuess = []

let NumGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid Number")
    } else if (guess < 1) {
        alert("Please enter a number more than 1")
    } else if (guess > 100) {
        alert("Please enter a Number less than 100 ")
    } else {
        prevGuess.push(guess)
        if (NumGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over.Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it Right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too High`)
    }
}
function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += ` ${guess}, `
    NumGuess++;
    remaining.innerHTML = `${11 - NumGuess}`
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;

}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h1 id ="newGame">Start new Game</h1>`;
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGAmebutton = document.querySelector('#newGame')
    newGAmebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        NumGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - NumGuess}`;
        userInput.removeAttribute('disabled')
        startover.removeChild(p);
        console.log(p)
        playGame = true;
    })
}