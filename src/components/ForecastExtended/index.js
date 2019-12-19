import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './../styles.css';
import { url_base_forecast, api_key } from './../../constants/api_url' // se usa {} porque en el archivo api_url no se especifico el export default
import transformForecast from './../../services/transformForecast';
import ForecastItem from './ForecastItem';

class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps) { //Se ejecuta cada vez que hay alguna actualizacion de las propiedades
        if (nextProps.city !== this.props.city){ //Si la proxima propiedad city es diferente a la que ya esta seteada
            this.state = { forecastData: null } //volviendo el forecastData a nulo se pone el valor de carga
            this.updateCity(nextProps.city); // ejecuta el update con la nueva city
        }
    }
    
    updateCity = city => {
        fetch(`${url_base_forecast}?q=${city}&appid=${api_key}`).then(
            resolve =>(resolve.json())
        ).then(
            forecast_data => {
                const forecastData = transformForecast(forecast_data);
                console.log(forecastData)
                this.setState({forecastData});
            }
        )
        .catch((error)=>(console.log(error)));

    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecast => (
        <ForecastItem 
            weekDay={forecast.weekDay} 
            data={forecast.data} 
            hour={forecast.hour} 
            key={`${forecast.weekDay}${forecast.hour}`}>
            </ForecastItem>));
    }
    renderProgress = () =>{
        return <h3>Cargando pronostico extendido...</h3>;
    }
    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <div>
                    <h2 className='forecast-title'>{`Pronóstico Extendido para ${city}`}</h2>
                    {forecastData ?
                        this.renderForecastItemDays(forecastData) :
                        this.renderProgress()}
                </div>
                {/* <div>
                    {this.renderForecastItemDays()}
                </div> */}
            </div>
        )
    }
}
ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;