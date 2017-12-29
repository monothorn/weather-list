import axios from 'axios';

const API_KEY = 'b5eccc0aaec525b759db286134913d89';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

