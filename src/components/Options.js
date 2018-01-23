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
            time: 10,
            type: '',
        }
    }

    handleChange() {
        if (this.props.action === 'showTimer') {
            const timer = document.querySelector('.timerWrapper');

            this.state.showTimer === true ? this.setState({showTimer: false}) : this.setState({showTimer: true});
            this.state.showTimer === true ? timer.style.opacity = 1 : timer.style.opacity = 0;
        } else if (this.props.action === 'setTime') {
            
        } 
    }

    render() {
        return (
            <Label>
                {this.props.title}
                <Input type={this.props.type} onChange={() => this.handleChange()} />
            </Label>
        );
    }
}



class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setTime = this.setTime.bind(this);
    }

    setTime(e) {
        var timeLeft = e.target.value.props.time;
    }

    render() {
        return (
            <OptionsContainer>
                <Title>Random Item Picker</Title>
                <Option title="Show Timer: " type="checkbox" action="showTimer" />
                <Option title="Minutes: " type="number" action="setTime" onChange={this.setTime} value={this.props.time} />
            </OptionsContainer>
        );  
    }
}

export default Options;