import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const ciudades = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Tandil,ar'
];

class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     city: null, //Solo se puede hacer en el constructor, para cambiarlo en otro lado se usa setState
  //   }
  // }
  // No tiene sentido porque ahora se maneja en el

  render(){ 
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
            <LocationListContainer 
              cities={ciudades}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={4}>
              <div className="details">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default App;