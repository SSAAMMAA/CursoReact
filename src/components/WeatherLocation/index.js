import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather'
//import { api_weather } from './../../constants/api_url' // se usa {} porque en el archivo api_url no se especifico el export default

class WeatherLocation extends Component{ // al extender de component tenemos mas funcionalidades disponibles
    constructor(props){
        super(props);
        const {city} =props;
        this.state={ //estado local/parcial del componente
            city,
            data: null,
        };
    }
    componentDidMount() {  // se ejecuta inmediatamente despues del primer render
        this.handleUpdateClick();
    }   
    
    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json(); //devuelve una promesa json
        }).then(data=>{
            const newWeather = transformWeather(data); //data sera todo el json completo, getData se encargara de utilizar los datos que requiera
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }

    render(){
        const {onWeatherLocationClick} = this.props;
        const {city,data} =this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={60} thickness={7}/>
                }
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;