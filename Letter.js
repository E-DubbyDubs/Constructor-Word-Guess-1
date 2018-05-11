

var Letter = function (character) {
    this.character = character;
    this.isLetterGuessed = false;

    this.display = function () {
        if (this.isLetterGuessed) {
            return (this.character)
        } else {

            return ("_");
        }
    }

    this.letterGuess = function (guess) {
        if (guess === this.character) {
            this.isLetterGuessed = true;
        }
    }
}



module.exports = Letter;
