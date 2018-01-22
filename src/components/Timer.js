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

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <TimeLeft className="timerWrapper">Timer</TimeLeft>
        );
    }
}

export default Timer;