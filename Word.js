var Letter = require("./Letter.js");

var Word = function (wordToString) {

    this.buildWord = function (word) {
        var temp = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            temp.push(currentLetter);
        }
        return temp;
    }

    this.letters = this.buildWord (wordToString);
    this.chosenWord = wordToString;
    console.log("Chosen word: " + this.chosenWord);

    this.letterGuess = function (wordToString, guessesString) {

        for (var i = 0; i < this.chosenWord.length; i++) {
            var character = new Letter(this.chosenWord[i]);
            this.letterArray.push(character);

            var guessFunction = new Letter(this.chosenWord[i], guessesString);
            guessFunction.letterCheck(this.chosenWord[i], guessesString);
        }
        console.log(this.letterArray.length)
    }

    this.checkGuess = function (guess) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);

        }
    }

    this.returnString = function () {

        for (var i = 0; i < this.chosenWord.length; i++) {
            var newLetterReturn = new Letter(this.chosenWord[i]);
            this.letterArray.push(newLetterReturn);

            newLetterReturn.letterReturn(this.chosenWord[i]);
        }
    }

    this.display = function () {
        var temp = '';
        for (var i = 0; i < this.letters.length; i++) {
            temp += this.letters[i].display();
        }
        return temp;
    }

    
}


module.exports = Word;



