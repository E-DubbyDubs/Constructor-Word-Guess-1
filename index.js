var inquirer = require("inquirer");

var Word = require("./Word.js");

var guesses = 10;

var wordsToGuess = ["dont speak", "im just a girl", "its my life", "spiderwebs"];

var randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

var chosenWord = new Word(randomWord);

var guessWord = function () {

    if (guesses > 0) {

        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!"
            }
        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;
            chosenWord.checkGuess(guess);
            console.log(chosenWord.display());
            guesses--;
            console.log(guesses)
            guessWord();
        });

    }

}

guessWord();
