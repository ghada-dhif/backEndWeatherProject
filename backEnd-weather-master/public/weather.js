const axios = require('axios');
const API_KEY = 'd04bbe31cbbada09633764dbd8a213bd';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

async function weather(lat,lon) {
   try {
     const url = `${ROOT_URL}&lat=${lat}&lon=${lon}`;
     const weather_data = await axios(url);
     return weather_data.data;
   } catch (e) {
     console.error(e);
   }
}

module.exports.weather = weather;