import startOfGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operations.length - 1);
  return operations[randomIndex];
};

const rulesOfGame = 'What is the result of the expression?';

const gameQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operation = getRandomOperation();
  let question;
  let expectedAnswer;

  switch (operation) {
    case '+':
      question = `${num1} + ${num2}`;
      expectedAnswer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      expectedAnswer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      expectedAnswer = num1 * num2;
      break;
    default:
      throw new Error('Invalid operation');
  }

  return [question, String(expectedAnswer)];
};

const calculateGame = () => startOfGames(rulesOfGame, gameQuestionAnswer);

export default calculateGame;
