//returns a random integer between lowNum and highNum
let randomNumberBetween = function (lowNum, highNum) {
  if ((!Number.isNaN(lowNum) || !Number.isNaN(highNum)) && lowNum <= highNum) {
    return (
      Math.floor(
        (1 + Math.floor(highNum) - Math.ceil(lowNum)) * Math.random() +
          Math.ceil(lowNum)
      ) 
    );
  }
};

//Calculates and displays if user guess is correct
let displayAnswer = function (answer, guess) {
  let outputLine = document.getElementById("outputLine");
  if (answer === guess) {
    outputLine.innerHTML = `You are correct! 
    The number and your guess are both ${answer}!`;
  } else if (guess < answer) {
    outputLine.innerHTML = `You are incorrect! 
    Your guess was too small, the number is actually ${answer}!`;
  } else if (guess > answer) {
    outputLine.innerHTML = `You were incorrect! 
    Your guess was too large, the number is actually ${answer}!`;
  } else {
    outputLine.innerHTML = "Error: Incorrect Input!";
  }
};

//handles the user input
let handlers = {
  //gathers user input into displayAnswer()
  guessButton: function () {
    let lowestNumberInput = document.getElementById("lowestNumberInput");
    let highestNumberInput = document.getElementById("highestNumberInput");
    let guessNumberInput = document.getElementById("guessNumberInput");
    displayAnswer(
      randomNumberBetween(
        lowestNumberInput.valueAsNumber,
        highestNumberInput.valueAsNumber
      ),
      guessNumberInput.valueAsNumber
    );
  },
};
