import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const upperBorder = number / 2;
  if (number < 2) return false;
  for (let i = 2; i < upperBorder; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswer = () => {
  const randomNumber = getRandomNumber();
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const startPrimeGame = () => startGames(gameRules, generateQuestionAnswer);

export default startPrimeGame;
