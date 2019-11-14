async function getHotelData() {
    try {
        const response = await fetch('./hotel.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }

}

let hotelData = {};
getHotelData().then(data => hotelData = data);

let links = document.querySelectorAll('a');
//use links to loop over each element and addEventListener to each one
//Use forEach
document.querySelector('#hotelName').textContent = '';
document.querySelector('#marriott').addEventListener('click', hotelInfo);
document.querySelector('#hilton').addEventListener('click', hotelInfo);
document.querySelector('#sheriton').addEventListener('click', hotelInfo);

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase();
    })

    let rooms = hotelChoice.roomType;
    let roomString = '';
    rooms.forEach(element => {
        roomString += `${element}, `;
    });
    roomString = roomString.slice(0, -2);

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`;
    document.querySelector('#address').textContent = `${hotelChoice.address}`;
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`;
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`;
    document.querySelector('#roomType').textContent = `${roomString}`;
    document.querySelector('#picture').src = `./images/${hotelChoice.picture}`;
}