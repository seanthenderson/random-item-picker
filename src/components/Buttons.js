import React, { Component } from 'react';
import styled from 'styled-components';

let x = 0;
let intervalHandle;

const Button = styled.div`
    width: 150px;
	margin: auto;
	padding: 20px;
	background: #1fa91f;
	border: 3px solid #fff;
	border-radius: 10px;
	color: #fff;
	font-family: Arial, sans-serif;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
    display: block;
    opacity: 0;
	cursor: pointer;
`;

const ItemsScroll = styled.div`
    margin: 15px 0;
    color: #fff;
    fon-family: Arial, sans-serif;
    font-size: 78px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s
`;

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Start'
        }
    }

    startStop() {
        const button = document.querySelector('.startStopButton');
        const allItemsList = document.querySelectorAll('.itemsList li');
        const itemScroll = document.querySelector('.itemScroll');
        let allItems = [];

        this.state.status === 'Start' ? this.setState({ status: 'Stop' }) : this.setState({ status: 'Start' });
        this.state.status === 'Start' ? button.style.background = '#ff0000' : button.style.background = '#1fa91f';

        for (let i = 0; i < allItemsList.length; i++) {
            let itemText = allItemsList[i].textContent.replace('x', '');
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
            const timer = document.querySelector('.timerWrapper');
            const presentTime = timer.innerHTML;
        }
    }

    render() {
        return (
            <div>
                <Button className="startStopButton" onClick={() => this.startStop()}>{this.state.status}</Button>
                <ItemsScroll className="itemScroll"></ItemsScroll>
            </div>
        )
    }
}

export default Buttons;