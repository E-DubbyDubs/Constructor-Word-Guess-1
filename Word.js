var Letter = require("./Letter.js");

var Word = function (wordToString, guessedLetter) {

    //Random Word String
    this.chosenWord = wordToString; 
    console.log(this.chosenWord);
    this.letterArray = [];

    for(var i = 0; i < this.chosenWord.length; i++) {
    var newCharacter = new Letter(this.chosenWord[i]);
    this.letterArray.push(newCharacter);
    }

    this.returnString = function (wordToString) {

        // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        return wordToString;
    }
}
    Word.prototype.letterGuess = function (guessedLetter) {
        // A function that takes a character as an argument and calls the guess function on each letter object
        var guessFunction = new Letter(guessedLetter);
        // guessFunction.letterCheck(guessedLetter);
    }




module.exports = Word;



