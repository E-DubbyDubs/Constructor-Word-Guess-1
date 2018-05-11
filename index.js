var inquirer = require("inquirer");

var Word = require("./Word.js");

var guesses = 10;

var wordsToGuess = ["dont speak", "im just a girl", "its my life", "spiderwebs"];

var randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

var chosenWord = new Word(randomWord);

function guessWord() {

    if (guesses > 0) {

        inquirer.prompt([
            {
                name: "txt",
                message: "Pick a letter to guess the 'No Doubt' song!",
                // validate: function (str) {
                //     if (str.length != 1) return false;
                //     var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                //     return regEx.test(str);
                // }
            }

        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;
            chosenWord.checkGuess(guess);
            console.log(chosenWord.display());

            if (randomWord.indexOf(guess) === -1) {
                guesses--;
                console.log("INCORRECT! " + guesses + " guesses remaining")
            }

            if (randomWord === chosenWord.display()) {
                guesses = 10;
                console.log("CORRECT! Next word!");
                chosenWord = new Word(randomWord);  
            }

            guessWord();

        });

    }

    if (guesses === 0) {
        console.log("GAME OVER!");
        inquirer.prompt([
            {
                name: "confirm",
                type: "confirm",
                message: "Play again?",
                default: true
            }
        ])
            .then(function(inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                chosenWord = new Word(randomWord)
            }
            else {
                console.log("K. 'DON'T SPEAK' to me ever again! lolzzzz")
                process.exit();
            }
            guessWord();
            })}

}

guessWord();
