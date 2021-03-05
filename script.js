let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const checkHumanGuess = number => {
    if (number < 0 || number > 9) 
    window.alert('Please insert a number between 0 and 9!'); 
}

const getAbsoluteDifference = (number1, number2) => Math.abs(number1 - number2);

const compareGuesses = (humanGuess, computerGuess, target) => {
    checkHumanGuess(humanGuess);
    let humanDiff = getAbsoluteDifference(humanGuess, target);
    let computerDiff = getAbsoluteDifference(computerGuess, target);

    return computerDiff < humanDiff ? false : true;
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;