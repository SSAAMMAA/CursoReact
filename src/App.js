import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions'
import './App.css';
const ciudades = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Tandil,ar'
];

class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null, //Solo se puede hacer en el constructor, para cambiarlo en otro lado se usa setState
    }
  }
  handleSelectedLocation = city =>{
    this.setState({city});
    console.log (`handleSelectedLocation con ${city}`);
    this.props.setCity(city);
  }
  render(){ 
    const {city} = this.state;
    return(
      <Grid>
        <Row>
          <AppBar position='sticky'> 
            <Toolbar>
              <Typography variant='subtitle1' color='inherit'>
                  Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={ciudades}
              onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={4}>
              <div className="details">
                {city ? 
                  <ForecastExtended city={city}></ForecastExtended> :
                  null
                }
              </div>
            </Paper>
          </Col>
        </Row>


      </Grid>
    );
  }
}


const mapDispatchToPropsActions = (dispatch) => ({   //este objeto tendra las funciones que vamos a invocar
   setCity: value => dispatch(setCity(value))

});
const AppConected = connect(null, mapDispatchToPropsActions)(App)      //Funcion que retorna otra funcion quye espera que le pasemos por parametro el componente
//Componente App tendra la habilidad de conectarse con el store
export default AppConected;