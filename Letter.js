

var Letter = function (character) {
    this.character = character;
    console.log(this.character)
    this.isLetterGuessed = false;
    // console.log(this.isLetterGuessed);

    this.letterReturn = function () {
        if (this.isLetterGuessed) {
            console.log(this.character)
        } else {
            console.log("_");
        }

        this.letterCheck = function (guessedLetter) {
            if (guessedLetter.toLowerCase() === this.character.toLowerCase()) {
                this.isLetterGuessed = true;
            } else {
                this.isLetterGuessed = false;
            }
        }
    }
}



module.exports = Letter;
