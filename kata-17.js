let prompt = require("prompt-sync")();

// code below (replace this example)

// creates random number from 1 to 100
let answer = Math.floor(Math.random() * 101);
let isGuessed = false;
let counter = 1;
let lastGuess = "";

while (isGuessed === false) {
  let guess = prompt("Guess a number: ");

  // using == because answer is num, but guess is string type
  if (guess == answer) {
    console.log("You got it! You took " + counter + " attempts!");
    isGuessed = true;
  } else if (guess === lastGuess) {
    console.log("Already Guessed!");
  } else if (guess != Number(guess)) {
    console.log("Not a number! Try again!");
  } else if (guess > answer) {
    console.log("Too High!");
    lastGuess = guess;
    counter += 1;
  } else if (guess < answer) {
    console.log("Too Low!");
    lastGuess = guess;
    counter += 1;
  }
}
