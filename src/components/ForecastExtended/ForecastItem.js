import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';
import PropTypes from 'prop-types';
import { Grid, Row, Col} from 'react-flexbox-grid';

const ForecastItem = ({weekDay, hour, data}) => {

    return(
        <Grid className='container-forecastItem'>
            <Row>
                <Col md={4}>
                    <div>{weekDay} Hora: {hour} hs</div>
                </Col>
                <Col md={8}>
                    <WeatherData data={data}></WeatherData>
                </Col>
            </Row>
        </Grid>
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