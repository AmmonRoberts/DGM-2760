document.querySelector('#assignmentName').innerText = `Grant's Tomb`;

const question = {
    stem: `Who is buried in Grant's Tomb?`,
    option1: `Bob Dylan`,
    option2: `George Washington`,
    option3: `Ulysses S. Grant`,
    option4: `Jay Leno`,
    correct: 3,
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#answerOne').textContent = question.option1;
        document.querySelector('#answerTwo').textContent = question.option2;
        document.querySelector('#answerThree').textContent = question.option3;
        document.querySelector('#answerFour').textContent = question.option4;
    },
    check: (userChoice) => {
        if (userChoice === question.correct)
            document.querySelector('.feedback').textContent = 'Correct answer!';
        else
            document.querySelector('.feedback').textContent = 'Incorrect answer, try again';
    }

}

document.querySelector('#answerOne').addEventListener('click', () => question.check(1))
document.querySelector('#answerTwo').addEventListener('click', () => question.check(2))
document.querySelector('#answerThree').addEventListener('click', () => question.check(3))
document.querySelector('#answerFour').addEventListener('click', () => question.check(4))

question.display();