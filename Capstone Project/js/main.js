//https://swapi.co/api/planets/?format=wookiee


async function search() {
    let query = document.querySelector('#searchText').value;
    let option = document.querySelector('#options').value;
    fetch(`https://swapi.co/api/${option}/?search=${query}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            switch (option) {
                case 'planets':
                    document.querySelector('#output').innerHTML =
                        `<p>Name: ${data.results[0].name}</p>
                        <p>Rotation_period: ${data.results[0].rotation_period}</p>
                        <p>Orbital_period: ${data.results[0].orbital_period}</p>
                        <p>Gravity: ${data.results[0].gravity}</p>
                        <p>Climate: ${data.results[0].climate}</p>
                        <p>Terrain: ${data.results[0].terrain}</p>
                        <p>Population: ${data.results[0].population}</p>
                        <p>Surface water: ${data.results[0].surface_water}</p>
                        <p>Residents: ${data.results[0].residents}</p>
                        <p>Learn more:</p>
                        `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].name}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
                case 'people':
                    document.querySelector('#output').innerHTML =
                        `<p>Name: ${data.results[0].name}</p>
                        <p>Height: ${data.results[0].height}</p>
                        <p>Mass: ${data.results[0].mass}</p>
                        <p>Gender: ${data.results[0].gender}</p>
                        <p>Eye color: ${data.results[0].eye_color}</p>
                        <p>Hair color: ${data.results[0].hair_color}</p>
                        <p>Skin color: ${data.results[0].skin_color}</p>
                        <p>Learn more:</p>
                        `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].name}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
                case 'species':
                    document.querySelector('#output').innerHTML =
                        `<p>Name: ${data.results[0].name}</p>
                    <p>Classification: ${data.results[0].classification}</p>
                    <p>Designation: ${data.results[0].designation}</p>
                    <p>Average_height: ${data.results[0].average_height}</p>
                    <p>Average_lifespan: ${data.results[0].average_lifespan}</p>
                    <p>Eye colors: ${data.results[0].eye_colors}</p>
                    <p>Hair colors: ${data.results[0].hair_colors}</p>
                    <p>Language: ${data.results[0].language}</p>
                    <p>Learn more:</p>
                    `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].name}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
                case 'films':
                    document.querySelector('#output').innerHTML =
                        `<p>Title: ${data.results[0].title}</p>
                        <p>Epsiode: ${data.results[0].episode_id}</p>
                        <p>Director: ${data.results[0].director}</p>
                        <p>Producer: ${data.results[0].producer}</p>
                        <p>Release date: ${data.results[0].release_date}</p>
                        <p>Learn more:</p>
                        `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].title}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
                case 'vehicles':
                    document.querySelector('#output').innerHTML =
                        `<p>Name: ${data.results[0].name}</p>
                        <p>Model: ${data.results[0].model}</p>
                        <p>Manufacturer: ${data.results[0].manufacturer}</p>
                        <p>Length: ${data.results[0].length}</p>
                        <p>Vehicle class: ${data.results[0].vehicle_class}</p>
                        <p>Maximum atmosphering speed: ${data.results[0].max_atmosphering_speed}</p>
                        <p>Crew: ${data.results[0].crew}</p>
                        <p>Passengers: ${data.results[0].passengers}</p>
                        <p>Cost in credits: ${data.results[0].cost_in_credits}</p>
                        <p>Learn more:</p>
                        `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].name}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
                case 'starships':
                    document.querySelector('#output').innerHTML =
                        `<p>Name: ${data.results[0].name}</p>
                        <p>Model: ${data.results[0].model}</p>
                        <p>Starship class: ${data.results[0].starship_class}</p>
                        <p>Manufacturer: ${data.results[0].manufacturer}</p>
                        <p>Length: ${data.results[0].length}</p>
                        <p>Hyperdrive Rating: ${data.results[0].hyperdrive_rating}</p>
                        <p>Maximum atmosphering speed: ${data.results[0].max_atmosphering_speed}</p>
                        <p>Crew: ${data.results[0].crew}</p>
                        <p>Passengers: ${data.results[0].passengers}</p>
                        <p>Cargo capacity: ${data.results[0].cargo_capacity}</p>
                        <p>Cost in credits: ${data.results[0].cost_in_credits}</p>
                        <p>Learn more:</p>
                        `;
                    let a = document.createElement('p');
                    a.innerHTML = `<a href = 'https://starwars.fandom.com/wiki/Special:Search?query=${data.results[0].name}'>Search on Wookieepedia</a>`;
                    document.querySelector('#output').appendChild(a);
                    break;
            }
        })
        .catch(function (err) {
            console.log('Something went wrong!', err);
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
//             console.log('Something went wrong!', err);
//             // alert('Please double check your search query!');
//         });
// }

// document.querySelector(`#faveChar`).addEventListener('click', );
// document.querySelector(`#faveVehicle`).addEventListener('click', );
document.querySelector(`#search`).addEventListener('click', search);
// document.querySelector(`#searchWookiee`).addEventListener('click', searchWookiee);


// function searchWookie() {

// }

// function showStuff() {
//     if (flag == 0) {
//         let p = document.createElement('p');
//         p.innerHTML = question;
//         document.querySelector('#category').appendChild(p);
//         p.innerHTML = answer;
//         document.querySelector('#output').appendChild(p);
//         flag = 1;
//     }

// }