let prompt = require("prompt-sync")();

// code below (replace this example)

// creates random number from 1 to 100
let answer = Math.floor(Math.random() * 101);
let isGuessed = false;

while (isGuessed === false) {
  let guess = prompt("Guess a number: ");

  // using == because answer is num, but guess is string type
  if (guess == answer) {
    console.log("You got it!");
    isGuessed = true;
  } else if (guess > answer) {
    console.log("Too High!");
  } else if (guess < answer) {
    console.log("Too Low!");
  }
}
