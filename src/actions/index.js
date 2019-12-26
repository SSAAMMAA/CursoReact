import { url_base_forecast,url_base_weather, api_key } from './../constants/api_url' // se usa {} porque en el archivo api_url no se especifico el export default
import transformForecast from './../services/transformForecast'
import transformWeather from './../services/transformWeather'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload}); // accion 
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
        //activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;

    const now = new Date();

    if (date && (now - date) < 1 * 60 * 1000){
      return;
    }
    return fetch(url_forecast).then(
        data =>(data.json())
    ).then(
        weather_data => {
            const forecastData = transformForecast(weather_data);
            //modificar el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({city: payload, forecastData }))
        }
    );
  }  
};

export const setWeather = payload =>{

  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      
      const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
      fetch(api_weather).then( data => {
        return data.json(); //devuelve una promesa json
      }).then(weather_data=>{
          const weather = transformWeather(weather_data); //data sera todo el json completo, getData se encargara de utilizar los datos que requiera
          dispatch(setWeatherCity({city, weather}))
        });
      });
  }
}