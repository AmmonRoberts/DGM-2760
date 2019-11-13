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
    console.log(hotelChoice);

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`;

}