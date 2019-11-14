document.querySelector('#details').style.display = 'none';

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

links.forEach(element => {
    document.querySelector(`#${element.id}`).addEventListener('click', hotelInfo);
});



function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase();
    })

    if (document.querySelector('#details').style.display = 'none') {
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
        document.querySelector('#details').style.display = 'block';

    } else {
        document.querySelector('#details').style.display = 'none'
    }
}