import startGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateQuestionAnswer = () => {
  const randomLength = getRandomNumber(5, 10); // создаем длину прогрессии мин=5, макс=10
  const randomStart = getRandomNumber(); // Задаем начальное число в прогрессии
  const randomStep = getRandomNumber(1, 10); // Задаем шаг прогрессии
  const progression = getProgression(randomLength, randomStart, randomStep);
  const hiddenIndex = getRandomNumber(0, randomLength - 1); // задаем случайный индекс для скрытия
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // заменяем скрытое значение на '..'
  const question = progression.join(' '); // создаем строку вопроса

  return [question, String(hiddenValue)]; // возвращаем вопрос и правильный ответ
};

const startProgressionGame = () => startGames(gameRules, generateQuestionAnswer);

export default startProgressionGame;
