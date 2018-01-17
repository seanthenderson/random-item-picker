import React, { Component } from 'react';

const timerStyle = {
    margin: '50px 0',
	color: '#fff',
	fontFamily: 'Arial, sans-serif',
	fontSize: '50px',
	textAlign: 'center',
	opacity: 0,
	transition: 'opacity 1s',
}

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="timerWrapper" style={timerStyle}>Timer</div>
        );
    }
}

export default Timer;