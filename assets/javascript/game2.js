//<!-- Computer Guesses  -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for wins losses and guesses left
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//function to run event when computer chooses letter

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)
//function to run event when user presses a key

var updateGuessesLeft = function() {
 
    document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
  };
  
  var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  
  var updateGuessesSoFar = function() {
   
    document.querySelector('#guessedLetters').innerHTML = "Guesses So Far: " + guessedLetters.join(', ');
  };
  
  var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  
  }
  
  updateLetterToGuess();
  updateGuessesLeft();
  
  
  document.onkeyup = function(event) {
      guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();


//logic that determines the outcome of game

if ((userGuess === computerGuesses) && (guessesLeft > 0)) 
{
    wins++;
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    alert("The letter to guess is " + letterToGuess);
    reset();
}

else if(guessesLeft == 0){ 
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("The letter to guess is " + letterToGuess); 
    reset();
}
  };
