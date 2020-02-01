/* eslint-disable class-methods-use-this */
import React from 'react';

class Clock extends React.Component {
    state = {
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
    }

    changingTime = (h, m, s) => {
      this.setState({
        hours: h,
        minutes: m,
        seconds: s,
      });
    }

    startClock = (func) => {
      const data = new Date();
      setTimeout(function run() {
        func(data.getHours(), data.getMinutes(), data.getSeconds());
        setTimeout(run, 1000);
      }, 1000);
    }

    render() {
      if (this.state.hours === undefined) {
        this.startClock(this.changingTime);  
      }
      return (
            <div className="clock">
        <p className="clock--hours">{this.state.hours}</p>
        <p className="clock--minutes">{this.state.minutes}</p>
        <p className="clock--seconds">{this.state.seconds}</p>
            </div>
      );
    }
}

export default Clock;

