import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGames = (gameRules, generateQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, expectedAnswer] = generateQuestionAnswer();
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

export default startGames;
