import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity,setWeather} from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    componentDidMount(){
        const {setWeather, setSelectedCity, cities, city} =this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city =>{
        this.props.setSelectedCity(city);
    }
    
    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}/> 
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string,
};

/*
*/
const mapDispatchToProps = dispatch => ({   //este objeto tendra las funciones que vamos a invocar
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
 });

//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)      //Funcion que retorna otra funcion quye espera que le pasemos por parametro el componente
 //Componente App tendra la habilidad de conectarse con el store
