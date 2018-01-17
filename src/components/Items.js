import React, { Component } from 'react';

const itemStyles = {
    marginTop: '10%',
	color: '#fff',
	fontFamily: 'Georgia, serif',
	fontSize: '150px',
	cursor: 'pointer',
}

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: '?',
            items: [
                'one',
                'two',
                'three'
            ]
        }
    }
    render() {
        return(
           <div style={itemStyles}>{this.state.initial}</div> 
        ); 
    }
}

export default Items;