import React from 'react';
import { format } from 'util';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      time: new Date()  
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  formatTime({ time }) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <>
        <h1>Clock</h1>

        <div className="clock-box">

          <div className="time">
            <div>Time</div>
            <div>{this.formatTime(this.state)}</div>
          </div>

          <div className="date">
            <div>Date</div>
            <div>{this.state.time.toDateString()}</div>
          </div>

        </div>
        
      </>
    )
  }

}


export default Clock;