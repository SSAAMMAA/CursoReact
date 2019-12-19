import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';
import PropTypes from 'prop-types';

const ForecastItem = ({weekDay, hour, data}) => {

    return(
        <div className='container-forecastItem'>
            <h2>{weekDay} - {hour} hs</h2>
            <WeatherData data={data}></WeatherData>
        </div>
    )
}
ForecastItem.propTypes ={
    weekDay: PropTypes.string.isRequired,
    data: PropTypes.shape({ //Espera un objeto con los parametros indicados
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;