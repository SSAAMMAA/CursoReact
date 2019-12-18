import { url_base_weather, api_key } from './../constants/api_url' // se usa {} porque en el archivo api_url no se especifico el export default


const getUrlWeatherByCity = city =>{
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;