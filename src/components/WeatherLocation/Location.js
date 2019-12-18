import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) =>(
    // Destructuring
    //const {city} = props;
    //const city = props.city;
    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>
    );

//Validaciones PropTypes 
Location.propTypes ={
    city: PropTypes.string.isRequired, // PropertyType String Required para mas rapido -> ptsr
}
export default Location;