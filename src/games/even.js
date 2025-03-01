import startOfGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const gameQuestionAnswer = () => {
  const num = getRandomNumber(1, 100);
  const expectedAnswer = isEvenNumber(num) ? 'yes' : 'no';
  return [num, expectedAnswer];
};

const evenGame = () => startOfGames(rulesOfGame, gameQuestionAnswer);

export default evenGame;
