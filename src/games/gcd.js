import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateDivisor = (number1, number2) => {
  let currentNumber = number1;
  let divisor = number2;
  while (divisor !== 0) {
    const temp = divisor;
    divisor = currentNumber % divisor;
    currentNumber = temp;
  }
  return currentNumber;
};

const generateQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const expectedAnswer = calculateDivisor(randomNumber1, randomNumber2);
  return [question, String(expectedAnswer)];
};

const startDivisorGame = () => startGames(gameRules, generateQuestionAnswer);

export default startDivisorGame;
