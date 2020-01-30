import React from "react";

class Weather extends React.Component {
    render(){
        return (
            <div className="weather__infobox">
               {
                   this.props.info.name &&
                   <div className="weather__infobox--items">
                    <p>City : {this.props.info.name} , Country : {this.props.info.country}</p>
                    <p>Temperature : {this.props.info.temp} °C</p>
                    <p>Humidity : {this.props.info.humidity} %</p>
                    <p>Wind : {this.props.info.wind} m/s</p>
                   </div>
               }
            </div>
        );
    }
    gettingDay = () =>{
        //TO DO
    }
}

export default Weather; 