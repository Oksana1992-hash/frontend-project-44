import startOfGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfGame = 'What number is missing in the progression?';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const gameQuestionAnswer = () => {
  const length = getRandomNumber(5, 10); // создаем длину прогрессии мин=5, макс=10
  const start = getRandomNumber(1, 20); // Задаем начальное число в прогрессии
  const step = getRandomNumber(1, 10); // Задаем шаг прогрессии
  const progression = getProgression(length, start, step);
  const hiddenIndex = getRandomNumber(0, length - 1); // задаем случайный индекс для скрытия
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // заменяем скрытое значение на '..'
  const question = progression.join(' '); // создаем строку вопроса

  return [question, String(hiddenValue)]; // возвращаем вопрос и правильный ответ
};

const progressionGame = () => startOfGames(rulesOfGame, gameQuestionAnswer);

export default progressionGame;
