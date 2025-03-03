import startOfGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameQuestionAnswer = () => {
  const num = getRandomNumber(1, 1000);
  const expectedAnswer = isPrimeNum(num) ? 'yes' : 'no';
  return [num, expectedAnswer];
};

const isPrimeNumGame = () => startOfGames(rulesOfGame, gameQuestionAnswer);

export default isPrimeNumGame;
