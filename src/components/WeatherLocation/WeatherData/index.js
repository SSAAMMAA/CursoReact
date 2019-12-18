import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => ( //Se definen las variables directamente con objetos complejos
    //const {temperature, weatherState, humidity, wind} = data;
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
    );
WeatherData.propTypes = {
    data: PropTypes.shape({ //Espera un objeto con los parametros indicados
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;