import React, { Component } from 'react';

const itemStyles = {
    marginTop: '10%',
	color: '#fff',
	fontFamily: 'Georgia, serif',
	fontSize: '150px',
	cursor: 'pointer',
}

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                'one',
                'two',
                'three'
            ],
        }
    }

    render() {
        return (
            <ul style={{'list-style-type': 'none'}}>
                <li>
                    <label>
                        Add an item:
                        <input onChange={this.addItem} />
                    </label>
                </li>
                {this.state.itemList.map(item => <li>{item}</li>)}
            </ul>
        );
    }
}

export default ItemList;