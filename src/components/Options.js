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
    margin: '0 10px 10px',
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
                <input type={this.props.type} onChange={this.handleChange} />
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
                <Option title="Timer Duration (in minutes): " type="number" action="setTime" />
            </div>
        );
    }
}

export default Options;