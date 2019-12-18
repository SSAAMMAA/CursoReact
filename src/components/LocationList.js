import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

//Componente sin estado

const LocationList = ({cities,onSelectedLocation}) =>{
    const handleWeatherLocationClick  = city => {
        console.log(`handleWeatherLocationClick ${city}`);
        onSelectedLocation(city);
    }

    const strToCommponents = cities =>(
        cities.map (city => 
            (<WeatherLocation 
                key ={city} 
                city={city} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>
            )
        )
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