import readlineSync from 'readline-sync';

const generalQuestion = 3;

const startOfGames = (rulesOfGame, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rulesOfGame);

  for (let i = 0; i < generalQuestion; i += 1) {
    const [question, expectedAnswer] = gameQuestionAnswer(); // Получаем вопрос и ожидаемый ответ
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(expectedAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${name}!`);
      return; // Завершаем игру, если ответ неверен
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startOfGames;
