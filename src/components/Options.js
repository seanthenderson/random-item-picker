import React, { Component } from 'react';

const optionsStyle = {
    backgroundColor: '#333',
    color: '#dcdcdc',
}

const titleStyle = {
    margin: '20px 0',
    textDecoration: 'underline',
    textTransform: 'uppercase',
}

const labelStyle = {
    marginBottom: '10px',
    display: 'block',
}

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            showTimer: true,
            time: 10,
            type: '',
            itemList: [
                'one',
                'two',
                'three'
            ]
        }
    }

    showTimer() {
        this.showTimer = this.showTimer.bind(this);

        const timer = document.querySelector('#timerWrapper');

        this.state.showTimer === true ? this.setState({showTimer: false}) : this.setState({showTimer: true});
        this.state.showTimer === true ? timer.style.opacity = 1 : timer.style.opacity = 0;
    }

    render() {
        return (
            <label style={labelStyle}>
                {this.props.title}
                <input type={this.props.type} onClick={this.props.action} />
            </label>
        );
    }
}

class Options extends Component {
    render() {
        return (
            <div style={optionsStyle}>
                <div style={titleStyle}>Options</div>
                <Option title="Show Timer: " type="checkbox" action="showTimer" />
                <Option title="Timer Duration (in minutes): " type="number" />
                <Option title="Add an item: " type="text" />
            </div>
        );
    }
}

export default Options;