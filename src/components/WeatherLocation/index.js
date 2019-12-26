import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


const WeatherLocation = ({onWeatherLocationClick, city,data}) =>( // al extender de component tenemos mas funcionalidades disponibles
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? 
            <WeatherData data={data}/> :
            <CircularProgress size={60} thickness={7}/>
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({ //Espera un objeto con los parametros indicados
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;