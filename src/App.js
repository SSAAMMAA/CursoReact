import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
const ciudades = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Lima,Peru'
];
class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null, //Solo se puede hacer en el constructor, para cambiarlo en otro lado se usa setState
    }
  }
  handleSelectedLocation = city =>{
    console.log (`handleSelectedLocation con ${city}`);
    this.setState({city});
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
                {city === null ? 
                  <h1>No se seleccionó ciudad</h1> :
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>


      </Grid>
    );
  }
}

export default App;
