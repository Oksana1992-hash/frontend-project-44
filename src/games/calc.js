import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operations.length - 1);
  return operations[randomIndex];
};

const gameRules = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result;
};

const generateQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operation = getRandomOperation();
  const question = `${randomNumber1} ${operation} ${randomNumber2}`;
  const expectedAnswer = `${calculate(randomNumber1, randomNumber2, operation)}`;
  return [question, expectedAnswer];
};

const startCalculationGame = () => startGames(gameRules, generateQuestionAnswer);

export default startCalculationGame;
