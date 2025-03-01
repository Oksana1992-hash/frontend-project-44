import startOfGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const gameQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const expectedAnswer = gcd(num1, num2);
  return [question, String(expectedAnswer)];
};

const generalDivisorGame = () => startOfGames(rulesOfGame, gameQuestionAnswer);

export default generalDivisorGame;
