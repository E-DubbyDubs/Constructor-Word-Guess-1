var inquirer = require("inquirer");

var Word = require("./Word.js");

var guesses = 10;

var wordsToGuess = ["Dont Speak", "Im Just A Girl", "Its My Life", "Spiderwebs"];

var randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

var wordToString = randomWord.toString();

var chosenWord = new Word(wordToString);

var splitIntoLetters = wordToString.split('');

var guessWord = function () {

    if (guesses > 0) {

        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function (guessedLetter) {

            var guessedLetter = new Word(wordToString, guessedLetter);

            guessedLetter.letterGuess(guessedLetter);

            guesses--;
            guessWord();
        });

    }

}

guessWord();
