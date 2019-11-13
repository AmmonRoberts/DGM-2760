async function getHotelData() {
    try {
        const response = await fetch('../hotel.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }

}
let hotelData = {};
getHotelData().then(data => hotelData = data);