import React, { Component } from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
    margin-bottom: 10px;
    color: #222;
    color: #eee;
`;

const Title = styled.h1`
    width: 100%;
    margin: 0 auto 30px;
    padding: 10px 0;
    color: #1fa91f;
    font-family: 'Bangers', Arial, sans-serif;
    font-size: 4vw;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 1000;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.7);
    @media (max-width: 800px) {
        font-size: 10vw;
    }
    @media (max-width: 400px) {
        width: auto;
    }
`;

const Label = styled.label`
    margin: 0;
    font-weight: bold;
    @media (max-width: 360px) {
        margin-bottom: 5px;
        display: block;
    }
`;

const Input = styled.input`
    width: 55px;
    margin: 0 3px;
    padding: 2px 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 18px;
    font-weight: bold;
    vertical-align: middle;
`;

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: '',
            title: '',
            showTimer: true,
            type: '',
        }
    }

    handleChange() {
        if (this.props.action === 'showTimer') {
            const timer = document.querySelector('.timerWrapper');

            this.state.showTimer === true ? this.setState({ showTimer: false }) : this.setState({ showTimer: true });
            this.state.showTimer === true ? timer.style.opacity = 1 : timer.style.opacity = 0;
        }

        // Add zero to minute mark
        const timerSeconds = document.querySelectorAll('.timerWrapper span');
        
        if (timerSeconds[1].textContent === '0') {
            timerSeconds[1].textContent += '0';
        } else if (timerSeconds[1].textContent <= 9 && timerSeconds[1].textContent > 0) {
            timerSeconds[1].textContent = '0' + timerSeconds[1].textContent;
        }
    }

    render() {
        return (
            <Label>
                {this.props.title}
                <Input className={this.props.class} type={this.props.type} onChange={() => this.handleChange()} defaultValue={this.props.value} />
            </Label>
        );
    }
}



class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 60
        };
    }

    render() {
        return (
            <OptionsContainer>
                <Title>Random Item Picker!!</Title>
                <Option title="Show Timer: " type="checkbox" action="showTimer" class="timer-checkbox" />
                <Option title="Seconds: " type="number" value={this.state.time} class="seconds-input" />
            </OptionsContainer>
        );
    }
}

export default Options;