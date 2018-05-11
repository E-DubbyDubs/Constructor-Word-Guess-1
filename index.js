var inquirer = require("inquirer");

var Word = require("./Word.js");

var guesses = 10;
var points = 0;

var wordsToGuess = ["Don't Speak", "I'm Just a Girl", "It's My Life", "Spiderwebs", "Hey Baby", "Tragic Kingdom", "Ex-Girlfriend", "Simple Kind Of Life", "New", "Trapped In A Box"];

var randomWord;
var chosenWord;

function chooseRandomWord() {

    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]

    chosenWord = new Word(randomWord);
}

function guessWord() {

    if (guesses > 0 & points < 5) {

        console.log(chosenWord.display());

        inquirer.prompt([
            {
                name: "txt",
                message: "Pick a letter to guess the 'No Doubt' song!",
                validate: function (str) {
                    if (str.length != 1) return false;
                    var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }

            }

        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--;
                console.log("INCORRECT! " + guesses + " guesses remaining")
            }

            if (randomWord === chosenWord.display()) {
                console.log(chosenWord.display());
                guesses = 10;
                points++;

                if (points < 5) {
                    console.log("CORRECT! Next word!");
                    chooseRandomWord();
                }

                else {
                    winGame();
                }
            }

            if (guesses === 0) {
                loseGame();
            }

            guessWord();

        });

    }

}

function loseGame() {
    console.log("GAME OVER!");
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                chooseRandomWord();
            }
            else {
                console.log("K fine.. 'DON'T SPEAK' to me ever again! lolzzzz")
                process.exit();
            }
            guessWord();
        })
}

function winGame() {
    console.log("YOU WIN!");
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            }
            else {
                console.log("K fine.. It's YOUR life.")
                process.exit();
            }
        })

}



chooseRandomWord();
guessWord();