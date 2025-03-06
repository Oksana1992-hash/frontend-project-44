import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operations.length - 1);
  return operations[randomIndex];
};

const gameRules = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
  let question;
  let expectedAnswer;
  switch (operation) {
    case '+':
      question = `${number1} + ${number2}`;
      expectedAnswer = number1 + number2;
      break;
    case '-':
      question = `${number1} - ${number2}`;
      expectedAnswer = number1 - number2;
      break;
    case '*':
      question = `${number1} * ${number2}`;
      expectedAnswer = number1 * number2;
      break;
    default:
      throw new Error('Invalid operation');
  }
  return [question, String(expectedAnswer)];
};

const generateQuestionAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operation = getRandomOperation();
  return calculate(randomNumber1, randomNumber2, operation);
};

const startCalculationGame = () => startGames(gameRules, generateQuestionAnswer);

export default startCalculationGame;
