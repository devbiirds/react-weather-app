/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Clock from './clock';

class Info extends React.Component {
  render() {
    return (
            <div className="header">
                <h2 className="header__title">Weather App</h2>
                <p className="header__info">Узнайте погоду в вашем городе</p>
                <Clock/>
            </div>
    );
  }
}

export default Info;
