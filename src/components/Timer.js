import React, { Component } from 'react';
import styled from 'styled-components';

let x = 0;
let intervalHandle;

const Button = styled.div`
    width: 150px;
    margin: auto;
    padding: 20px;
    background: #1fa91f;
    border: 3px solid #fff;
    border-radius: 10px;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    opacity: 0;
    cursor: pointer;
`;

const ItemsScroll = styled.div`
    margin: 15px 0;
    color: #fff;
    fon-family: Arial, sans-serif;
    font-size: 78px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s
`;

const Time = styled.div`
    margin-top: 20px;
    color: #dcdcdc;
    font-size: 30px;
    font-weight: bold;
    opacity: 0;
`;

const TimeFragment = styled.span`
    margin-left: 5px;
    padding: 5px;
    background-color: #fff;
    border-radius: 3px;
    color: #222;
    font-size: 35px;
`;

class Timer extends Component {
    constructor() {
        super();
        this.state = { 
            time: {}, 
            seconds: 60,
            status: 'Start',
            timer: false
        };
        this.timer = 0;
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
    
      startStop() {
        this.state.timer ? this.timer = setInterval(this.countDown, 1000) : clearInterval(this.timer);
        this.state.timer ? this.setState({timer: false}) : this.setState({timer: true});
        if (this.state.timer === false) {
            this.setState({seconds: 61});
        } 

        const button = document.querySelector('.startStopButton');
        const allItemsList = document.querySelectorAll('.itemsList li');
        const itemScroll = document.querySelector('.itemScroll');
        let allItems = [];

        this.state.status === 'Start' ? this.setState({ status: 'Stop' }) : this.setState({ status: 'Start' });
        this.state.status === 'Start' ? button.style.background = '#ff0000' : button.style.background = '#1fa91f';

        for (let i = 0; i < allItemsList.length; i++) {
            let itemText = allItemsList[i].textContent.replace('x', '');
            allItems.push(itemText);
        }

        if (this.state.status === 'Start') {
            intervalHandle = setInterval(function () {
                itemScroll.textContent = allItems[x++ % allItems.length];
            }, 50);
            document.querySelector('.itemScroll').style.opacity = 1;
        } else {
            clearInterval(intervalHandle);
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
          console.log('at zero');  
          clearInterval(this.timer);
        }

        // Add zero to minute mark
        const timerSeconds = document.querySelectorAll('.timerWrapper span');

        if (timerSeconds[1].textContent === '0') {
            timerSeconds[1].textContent += '0';
        }
      }
    
      render() {
        return(
          <div>
            <ItemsScroll className="itemScroll"></ItemsScroll>
            <Button className="startStopButton" onClick={() => this.startStop()}>{this.state.status}</Button>
            <Time className="timerWrapper">
                <TimeFragment>{this.state.time.m}</TimeFragment> : 
                <TimeFragment>{this.state.time.s}</TimeFragment>
            </Time>
          </div>
        );
      }
}

export default Timer;