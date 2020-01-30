import React from "react";

class Info extends React.Component {
    render(){
        return (
            <div className="header">
                <h2 className="header__title">Weather App</h2>
                <p className="header__info">Узнайте погоду в вашем городе</p>
            </div>
        );
    }
}

export default Info; 