//https://swapi.co/api/people/?search=r2
//https://swapi.co/api/planets/?format=wookiee


async function search() {
    let query = document.querySelector('#searchText').value;
    let option = document.querySelector('#options').value;
    fetch(`https://swapi.co/api/${option}/?search=${query}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(element => {
                console.log(element);
            });

            console.log(data);
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
            alert('Please double check your search query!');
        });
}




// async function searchWookiee() {
//     let query = document.querySelector('#searchText').value;
//     let option = document.querySelector('#options').value;
//     fetch(`https://swapi.co/api/${option}/?search=${query}&format=wookiee`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // data.forEach(element => {
//             //     console.log(element);
//             // });

//             console.log(data);
//         })
//         .catch(function (err) {
//             console.log("Something went wrong!", err);
//             // alert('Please double check your search query!');
//         });
// }

// document.querySelector(`#faveChar`).addEventListener('click', );
// document.querySelector(`#faveVehicle`).addEventListener('click', );
document.querySelector(`#search`).addEventListener('click', search);
// document.querySelector(`#searchWookiee`).addEventListener('click', searchWookiee);


function searchWookie() {

}

function showStuff() {
    if (flag == 0) {
        let p = document.createElement("p");
        p.innerHTML = question;
        document.querySelector('#category').appendChild(p);
        p.innerHTML = answer;
        document.querySelector('#output').appendChild(p);
        flag = 1;
    }

}