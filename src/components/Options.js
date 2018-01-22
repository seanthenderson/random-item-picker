import React, { Component } from 'react';

const appTitleStyles = {
    width: '320px',
    margin: '0 auto 30px',
    padding: '10px 15px',
    backgroundColor: '#fff',
    border: '3px solid #fff',
    borderRadius: '3px',
    color: '#222',
    textShadow: '-1px 5px 10px #bbb'
}

const optionsStyle = {
    marginBottom: '10px',
    backgroundColor: '#333',
    color: '#dcdcdc',
}

const labelStyle = {
    margin: '0 10px 10px',
}

const durationInputStyles = {
    width: '50px'
}

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: '',
            title: '',
            showTimer: true,
            time: 10,
            type: '',
        },
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if (this.props.action === 'showTimer') {
            const timer = document.querySelector('#timerWrapper');

            this.state.showTimer === true ? this.setState({showTimer: false}) : this.setState({showTimer: true});
            this.state.showTimer === true ? timer.style.opacity = 1 : timer.style.opacity = 0;
        } else if (this.props.action === 'setTime') {
            
        } 
    }

    render() {
        return (
            <label style={labelStyle}>
                {this.props.title}
                <input type={this.props.type} onChange={this.handleChange} style={{maxWidth: '70px'}} />
            </label>
        );
    }
}



class Options extends Component {
    render() {
        return (
            <div style={optionsStyle}>
                <h1 style={appTitleStyles}>Random Item Picker</h1>
                <Option title="Show Timer: " type="checkbox" action="showTimer" />
                <Option title="Minutes: " type="number" action="setTime" />
            </div>
        );
    }
}

export default Options;