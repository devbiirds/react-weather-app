import React from "react";

class Weather extends React.Component {
    render(){
        return (
            <div>
               {
                   this.props.info.name &&
                   <div>
                    <p>City : {this.props.info.name} , Country : {this.props.info.country}</p>
                    <p>Temperature : {this.props.info.temp}</p>
                    <p>Humidity : {this.props.info.humidity} %</p>
                    <p>Wind : {this.props.info.wind}</p>
                    <p>Sunrise : {this.props.info.sunrise} </p>
                    <p>Sunset : {this.props.info.sunset}</p>
                   </div>
               }
            </div>
        );
    }
}

export default Weather; 