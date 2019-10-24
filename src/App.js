import React from 'react';


import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';


const API_key="6769bee229c73c93d1cea3e53ea41fe5";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined
    };
    this.getWeather();
  }

  getWeather= async() =>{
    const api_call= await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
      );

    const response= await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }
  
  
  render(){
    return(
    <div className="App">
      <Weather city={this.state.city} country={this.state.country}/>
    </div>
    );
  }
}

export default App;
