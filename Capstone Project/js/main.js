let question = '';
let answer = '';
let category = '';
let category_id = 0;
let flag = 0;

async function getRandomTrivia() {
    fetch('http://jservice.io/api/random/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            question = data[0].question.charAt(0).toUpperCase() + data[0].question.slice(1);
            answer = data[0].answer.charAt(0).toUpperCase() + data[0].answer.slice(1);
            category = data[0].category.title.charAt(0).toUpperCase() + data[0].category.title.slice(1);
            console.log(category);
            console.log(question);
            console.log(answer);
            showQuestion();
            flag = 0;

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
}

async function getFromCategory() {
    fetch(`http://jservice.io/api/random/?category_id=${category_id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //conditional stuff for categories
            question = data[0].question.charAt(0).toUpperCase() + data[0].question.slice(1);
            answer = data[0].answer.charAt(0).toUpperCase() + data[0].answer.slice(1);
            category = data[0].category.title.charAt(0).toUpperCase() + data[0].category.title.slice(1);
            // console.log(category);
            // console.log(question);
            // console.log(answer);
            showQuestion();
            flag = 0;
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
}

document.querySelector(`#randomQuestion`).addEventListener('click', getRandomTrivia);
document.querySelector(`#getAnswer`).addEventListener('click', showAnswer);
document.querySelector(`#historyLesson`).addEventListener('click', () => {
    category_id = 14685;
    getFromCategory();
});
document.querySelector(`#humanBody`).addEventListener('click', () => {
    category_id = 710;
    getFromCategory();
});

function showQuestion() {
    document.querySelector('#category').innerHTML = `<b>${category}</b>`;
    document.querySelector('#output').innerHTML = question;
}

function showAnswer() {
    if (flag == 0) {
        let p = document.createElement("p");
        p.innerHTML = question;
        document.querySelector('#category').appendChild(p);
        p.innerHTML = answer;
        document.querySelector('#output').appendChild(p);
        flag = 1;
    }

}