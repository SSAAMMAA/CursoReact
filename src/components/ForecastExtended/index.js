import React from 'react';
import PropTypes from 'prop-types';
import './../styles.css';
import ForecastItem from './ForecastItem';

const renderForecastItemDays =(forecastData)=>{
    return forecastData.map( forecast => (
    <ForecastItem 
        weekDay={forecast.weekDay} 
        data={forecast.data} 
        hour={forecast.hour} 
        key={`${forecast.weekDay}${forecast.hour}`}>
        </ForecastItem>));
}

const renderProgress = () =>{
    return <h3>Cargando pronostico extendido...</h3>
}

const ForecastExtended =({city, forecastData}) =>(
        <div className= "details">
            <h2 className='forecast-title'>{`Pronóstico Extendido para ${city}`}</h2>
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()}
        </div>
    );
ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;