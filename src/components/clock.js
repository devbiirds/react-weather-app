/* eslint-disable class-methods-use-this */
import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
    state = {
      time: undefined,
      day: undefined,
      month: undefined,
    }

    changingTime = (t, d, m) => {
      this.setState({
        time: t,
        day: d,
        month: m,
      });
    }

    startClock = () => {
      setInterval(() => {
        this.changingTime(moment().format('HH:mm:ss'), moment().format('dddd'), moment().format('MMMM Do YYYY'));
      }, 1000);
    }

    render() {
      if (this.state.hours === undefined) {
        this.startClock();
      }
      return (
            <div className="clock">
              <p className="clock--time">{this.state.time}</p>
              <p className="clock--day">{this.state.day}</p>
              <p className="clock--month">{this.state.month}</p>
            </div>
      );
    }
}

export default Clock;
