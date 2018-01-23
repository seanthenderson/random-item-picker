import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    width: 320px;
    margin: 0 auto 30px;
    padding: 10px 15px;
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 3px;
    color: #222;
    text-shadow: -1px 5px 10px #bbb;
`;

const OptionsContainer = styled.div`
    margin-bottom: 10px;
    backgroun-color: #333;
    color: #dcdcdc;
`;

const Label = styled.label`
    margin: 0 10px 10px;
`;

const Input = styled.input`
    max-width: 70px;
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
                <Input type={this.props.type} onChange={() => this.handleChange()} defaultValue={this.props.value}/>
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
                <Title>Random Item Picker</Title>
                <Option title="Show Timer: " type="checkbox" action="showTimer" />
                <Option title="Seconds: " type="number" value={this.state.time} />
            </OptionsContainer>
        );
    }
}

export default Options;