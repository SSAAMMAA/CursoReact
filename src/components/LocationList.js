import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

//Componente sin estado

const LocationList = ({cities,onSelectedLocation}) =>{
    const handleWeatherLocationClick  = city => {
        onSelectedLocation(city);
    }

    const strToCommponents = cities =>(
        cities.map (city => 
            (
                <WeatherLocation 
                key ={city.key} 
                city={city.name} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                data={city.data} />))
    );
    return(
        <div className="locationList">
            {strToCommponents(cities)}
        </div>
    );
}
LocationList.propsTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;