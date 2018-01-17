import React, { Component } from 'react';

const buttonStyle = {
    width: '150px',
	margin: 'auto',
	padding: '20px',
	background: '#1fa91f',
	border: '3px solid #fff',
	borderRadius: '10px',
	color: '#fff',
	fontFamily: 'Arial, sans-serif',
	fontSize: '30px',
	fontWeight: 'bold',
	textAlign: 'center',
	textTransform: 'uppercase',
	letterSpacing: '2px',
	display: 'block',
	cursor: 'pointer',
}

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Start'
        },
        this.startStop = this.startStop.bind(this);
    }

    startStop() {
        const button = document.querySelector('.button');

        this.state.status === 'Start' ? this.setState({status: 'Stop'}) : this.setState({status: 'Start'});
        this.state.status === 'Start' ? button.style.background = '#ff0000' : button.style.background = '#1fa91f';
    }

    render() {
        return(
            <div className="button" style={buttonStyle} onClick={this.startStop}>{this.state.status}</div>
        )
    }
}

export default Buttons;