let question = '';
let answer = '';
let flag = 0;

async function getRandomTrivia() {
    fetch('http://jservice.io/api/random/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //conditional stuff for categories
            question = data[0].question.charAt(0).toUpperCase() + data[0].question.slice(1);
            answer = data[0].answer.charAt(0).toUpperCase() + data[0].answer.slice(1);
            showQuestion();
            flag = 0;
            return function () {
                return data;
            };
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });

}

document.querySelector(`#randomQuestion`).addEventListener('click', getRandomTrivia);
document.querySelector(`#getAnswer`).addEventListener('click', showAnswer);

function showQuestion() {
    document.querySelector('#output').innerHTML = question;
}

function showAnswer() {
    if (flag == 0) {
        let p = document.createElement("p");
        p.innerHTML = answer;
        document.querySelector('#output').appendChild(p);
        flag = 1;
    }

}