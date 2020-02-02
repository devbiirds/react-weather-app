/* eslint-disable react/prop-types */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button >Get the weather</button>
            </form>
    );
  }
}

export default Form;
