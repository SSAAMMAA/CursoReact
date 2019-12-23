import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity} from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    handleSelectedLocation = city =>{
        this.props.setCity(city);
    }
    render() {
        return (
            <div>
                <LocationList 
                    cities={this.props.cities}
                    onSelectedLocation={this.handleSelectedLocation}/> 
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({   //este objeto tendra las funciones que vamos a invocar
    setCity: value => dispatch(setSelectedCity(value))
 });
 const LocationListConected = connect(null, mapDispatchToProps)(LocationListContainer)      //Funcion que retorna otra funcion quye espera que le pasemos por parametro el componente
 //Componente App tendra la habilidad de conectarse con el store
 export default LocationListConected;