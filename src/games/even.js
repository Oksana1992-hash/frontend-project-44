import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const randomNumber = getRandomNumber();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const startEvenGame = () => startGames(gameRules, generateQuestionAnswer);

export default startEvenGame;
