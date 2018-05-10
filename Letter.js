

var Letter = function (character, guessesString) {
    this.character = character;
    this.isLetterGuessed = false;
    console.log (this.isLetterGuessed)

    this.letterReturn = function (character) {
        if (this.isLetterGuessed) {
            console.log(this.character)
        } else {
            console.log("_");
        }

    }

    this.letterCheck = function (character, guessesString) {
        console.log("guessed: " + guessesString)
        console.log("character: " + character)
        if (guessesString === character) {
            this.isLetterGuessed = true;
            console.log(this.isLetterGuessed)

            return true;


        } else {
       
            this.isLetterGuessed = false;

        }
    }


}



module.exports = Letter;
