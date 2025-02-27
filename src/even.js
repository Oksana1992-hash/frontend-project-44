import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEvenNumberGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEvenNumber = (num) => num % 2 === 0;

  let rightAnswercount = 0;
  const geheralQuestion = 3;

  while (rightAnswercount < geheralQuestion) {
    const num = getRandomNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);

    const expectedAnswer = isEvenNumber(num) ? 'yes' : 'no';

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      rightAnswercount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default isEvenNumberGame;
