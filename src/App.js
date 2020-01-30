import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "4d7c525d8bf41c0284921f87d30a3c5e"

class App extends React.Component {

state = {
  name:undefined,
  country:undefined,
  temp: undefined, 
  sunrise:undefined,
  sunset:undefined,
  wind:undefined,
  humidity:undefined
}
gettingWeather = async (e) => {
  e.preventDefault();
const city_name = e.target.elements.city.value; 
if(city_name){
const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`);
const data = await api_url.json();
this.setState({
  name:data.name,
  country:data.sys.country,
  humidity:data.main.humidity,
  wind:data.wind.speed,
  sunrise:data.sys.sunrise,
  sunset:data.sys.sunset
})
}

}

render() {
  return (
    <div>
      <Info />
      <Form weatherMethod = {this.gettingWeather} />
      <Weather 
        info = {this.state}
      />
    </div>
  );
}

}

export default App;