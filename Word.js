var Letter = require("./Letter.js");

var Word = function (wordToString) {

    this.letterArray = [];

    this.chosenWord = wordToString;
    console.log("Chosen word: " + this.chosenWord);

    this.letterGuess = function (wordToString, guessesString) {

        for (var i = 0; i < this.chosenWord.length; i++) {
            var character = new Letter(this.chosenWord[i]);
            this.letterArray.push(character);

            var guessFunction = new Letter(this.chosenWord[i], guessesString);
            guessFunction.letterCheck(this.chosenWord[i], guessesString);
        }
    }

    this.returnString = function () {

        for (var i = 0; i < this.chosenWord.length; i++) {
        var newLetterReturn = new Letter(this.chosenWord[i]);
        this.letterArray.push(newLetterReturn);

        newLetterReturn.letterReturn(this.chosenWord[i]);
    }
    }
}


module.exports = Word;



