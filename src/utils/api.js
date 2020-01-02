// replace use device emulator const BASE_API = 'http://localhost:3000';
// URL PRODUCTION https://hotelsapp.adrianhorizon.now.sh
const BASE_API = 'https://hotelsapp.adrianhorizon.now.sh';

class Api {
  async getHotel() {
    const query = await fetch(`${BASE_API}/api/hotels`);
    const { hotels } = await query.json();
    return hotels;
  }

  async getHotelId(id) {
    const query = await fetch(`${BASE_API}/api/hotels/${id}`);
    const { hotels } = await query.json();
    return hotels;
  }

  async searchHotel(text) {
    const query = await fetch(`${BASE_API}/api/hotels?name=${text}`);
    const { hotels } = await query.json();
    return hotels;
  }
}

export default new Api();
