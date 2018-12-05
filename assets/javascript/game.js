//<!-- Computer Guesses  -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for wins losses and guesses left
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


//function to run event when user presses a key

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();


//document.onkeyup = function(event) {
//var userGuess = event.key;
//letters.push(userGuess);
//console.log(computerGuesses[0]);

var updateGuessesLeft = function()
 {
    document.querySelector('#guesses-Left').innerHTML = "Guesses left: " + guessesLeft;
  };

  var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  
  var updateGuessesSoFar = function() {
   
    document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
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
//defining the letter that the computer guesses

var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//logic that determines the outcome of game



if ((userGuess === computerGuesses) && (guesses > 0)) 
{
    wins++;
    guessesleft = 9;
    letters.length = 0;
    var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

else if ((userGuess !== computerGuesses) && (guesses > 0))
{
    guesses = guesses--;
}

else {
    losses++;
    guesses = 9;
    letters.length=0;
    var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//var html = "<p id="directions"> Press any letter on the keyboard to guess:</p>" +
//"<p id="user-wins">"Wins:" + wins + "</p>" +"
//<p id="user-losses">Losses: 0</p>
//<p id="guesses-left">Guesses Left: 9</p>
//<p id="guessed-letters">Guesses So Far:</p>

//<!-- Tracker: Wins, Losses, Guesses Left (increase wins or loses, start game over without refreshing page)  -->

// <!-- List of users guesses so far (display specific letters guessed, display until user wins or loses)  -->