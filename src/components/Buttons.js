import React, { Component } from 'react';

let x = 0;
let intervalHandle;

const buttonStyles = {
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
    opacity: 0,
    transition: 'opacity 0.2s'
}

const itemScrollStyles = {
    margin: '15px 0',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '78px',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.2s'
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
        const button = document.querySelector('.startStopButton');
        const allItemsList = document.querySelectorAll('.itemsList li');
        const itemScroll = document.querySelector('.itemScroll');
        let allItems = [];

        this.state.status === 'Start' ? this.setState({status: 'Stop'}) : this.setState({status: 'Start'});
        this.state.status === 'Start' ? button.style.background = '#ff0000' : button.style.background = '#1fa91f';

        for (let i=0; i<allItemsList.length; i++) {
            let itemText = allItemsList[i].textContent.replace('x','');
            allItems.push(itemText);
        }
        
        if (this.state.status === 'Start') {
            intervalHandle = setInterval(function () {
                itemScroll.textContent = allItems[x++ % allItems.length];
            }, 50);
            //document.querySelector('.itemsList').style.height = 0;
            document.querySelector('.itemScroll').style.opacity = 1;
        } else {
            clearInterval(intervalHandle);
            //document.querySelector('.itemsList').style.height = "auto";
        }
        

        
    }

    render() {
        return(
            <div>
                <div className="startStopButton" style={buttonStyles} onClick={this.startStop}>{this.state.status}</div>
                <div className="itemScroll" style={itemScrollStyles}></div>
            </div>
        )
    }
}

export default Buttons;