async function getRandomTrivia() {
    fetch('http://jservice.io/api/random/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.querySelector('#output').innerHTML = `${data[0].question} <br> ${data[0].answer}`;
            return function () {
                return data;
            };
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });

}
getRandomTrivia();