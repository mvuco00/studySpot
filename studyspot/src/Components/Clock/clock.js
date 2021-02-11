import React, { Component } from "react";
import classes from "./clock.css";
function realTimeClock() {
  var rtClock = new Date();
  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  return { hours, minutes, seconds };
}

class Clock extends Component {
  clockInterval = "";

  state = {
    clock: realTimeClock(),
  };

  componentDidMount() {
    this.clockInterval = setInterval(
      () => this.setState({ clock: realTimeClock() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
  render() {
    return (
      <div className={classes.clockBg}>
        <div>
          <div>CLOCK</div>
          <div>{`${this.state.clock.hours}:${this.state.clock.minutes}:${this.state.clock.seconds}`}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
