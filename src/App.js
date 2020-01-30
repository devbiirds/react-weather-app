import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY_WEATHER = "4d7c525d8bf41c0284921f87d30a3c5e"
const API_KEY_PHOTO = '0c7ebe28753ec22682a20b672338a6a28a6f8b4831d3698cfc97c16c6c2c607e'
const KELVIN_DEGREES = 273;

class App extends React.Component {

state = {
  weather:undefined,
  name:undefined,
  country:undefined,
  temp: undefined, 
  wind:undefined,
  humidity:undefined
}
gettingWeather = async (e) => {
e.preventDefault();
const city_name = e.target.elements.city.value; 
if(city_name){
const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY_WEATHER}`);
const data = await api_url.json();
this.setState({
  weather:data.weather[0].main,
  name:data.name,
  temp:Math.round(data.main.temp - KELVIN_DEGREES),
  country:data.sys.country,
  humidity:data.main.humidity,
  wind:data.wind.speed
})
}
this.changingBackground(this.state.name);
}


changingBackground = async (city) => {
const api_url = await fetch(`https://api.unsplash.com/photos/random?query=Mist&client_id=${API_KEY_PHOTO}`)
const data = await api_url.json();
document.body.style = `background: url(${data.urls.full}&w=${window.screen.width}&h=${window.screen.height}&fit=crop) no-repeat`
}
render() {
  return (
    <div className="wrapper">
      <Info />
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