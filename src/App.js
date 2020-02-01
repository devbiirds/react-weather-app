/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import HTTP from './services/http';

const API_KEY_WEATHER = '4d7c525d8bf41c0284921f87d30a3c5e';
const API_KEY_PHOTO = '0c7ebe28753ec22682a20b672338a6a28a6f8b4831d3698cfc97c16c6c2c607e';
const KELVIN_DEGREES = 273;

class App extends React.Component {
state = {
  weather: undefined,
  name: undefined,
  country: undefined,
  temp: undefined,
  wind: undefined,
  humidity: undefined,
  iconid: undefined,
}

gettingWeather = async (e) => {
  e.preventDefault();
  const cityName = e.target.elements.city.value;
  if (cityName) {
    const data = await HTTP.Get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_WEATHER}`);
    this.changingWeather(data);
  }
}

changingWeather = (data) => {
  if (data !== undefined) {
    this.setState({
      weather: data.weather[0].main,
      name: data.name,
      temp: Math.round(data.main.temp - KELVIN_DEGREES),
      country: data.sys.country,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      iconid: data.weather[0].icon,
    });
    this.changingBackground(this.state.weather);
  }
}

changingBackground = async (info) => {
  const data = await HTTP.Get(`https://api.unsplash.com/photos/random?query=${info}&client_id=${API_KEY_PHOTO}`);
  document.body.style = `background: url(${data.urls.full}&w=${window.screen.width}&h=${window.screen.height}&fit=crop) no-repeat`;
}

firstLoad = async () => {
  const cityName = await HTTP.Get('http://ipinfo.io?token=a993f39951afab');
  const data = await HTTP.Get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.city}&appid=${API_KEY_WEATHER}`);
  this.changingWeather(data);
}

render() {
  if (!this.state.name) {
    this.firstLoad();
  }
  return (
    <div className="wrapper">
      <Info/>
      <div className="formbox">
      <Form weatherMethod = {this.gettingWeather} />
      <Weather
        info = {this.state}
      />
      </div>
    </div>
  );
}
}

export default App;
