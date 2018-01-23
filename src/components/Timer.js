import React, { Component } from 'react';
import styled from 'styled-components';

const TimeLeft = styled.div`
    margin: 50px 0;
	color: #fff;
	font-family: Arial; sans-serif;
	font-size: 50px;
	text-align: center;
	opacity: 0;
	transition: opacity 1s;
`;

const Time = styled.div`
    color: #fff;
    font-size: 20px;
`;

class Timer extends Component {
    constructor() {
        super();
        this.state = { 
            time: {}, 
            seconds: 60
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      startTimer() {
        if (this.timer == 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }
    
      render() {
        return(
          <div>
            <TimeLeft className="timerWrapper" onClick={this.startTimer}>
                Start
                <Time>{this.state.time.m} : {this.state.time.s}</Time>
            </TimeLeft>
          </div>
        );
      }
}

export default Timer;