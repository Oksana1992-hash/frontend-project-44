import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomOperation = () => {
    const operations = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operations.length - 1);
    return operations[randomIndex];
};

const calculateGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
  
    let rightAnswerCount = 0;
    const generalQuestion = 3;
  
    while (rightAnswerCount < generalQuestion) {
        const num1 = getRandomNumber(1, 100);
        const num2 = getRandomNumber(1, 100);
        const operation = getRandomOperation();

        let question;
        let expectedAnswer;

        switch (operation) {
            case '+':
                question = `${num1} + ${num2}`;
                expectedAnswer = num1 + num2;
                break;
            case '-':
                question = `${num1} - ${num2}`;
                expectedAnswer = num1 - num2;
                break;
            case '*':
                question = `${num1} * ${num2}`;
                expectedAnswer = num1 * num2;
                break;
        }

        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (Number(userAnswer) === expectedAnswer) {
            console.log('Correct!');
            rightAnswerCount += 1;
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${name}!`);
            return;
      }
    }
  
    console.log(`Congratulations, ${name}!`);
  };
  
  export default calculateGame;
