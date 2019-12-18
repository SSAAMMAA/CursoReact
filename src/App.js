import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
const ciudades = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Lima,Peru'
];
class App extends Component {
  handleSelectedLocation = city =>{
    console.log ("handleSelectedLocation");
  }
  render(){ 
    return(
    <div className="App">
      <LocationList cities={ciudades}
      onSelectedLocation={this.handleSelectedLocation}/>
    </div>
    );
  }
}

export default App;
