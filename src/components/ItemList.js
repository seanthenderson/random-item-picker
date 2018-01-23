import React, { Component } from "react";
import styled from 'styled-components';

let x = 0;
let items = [];

const Label = styled.label`
  color: #dcdcdc;
`;

const ItemsList = styled.ul`
  padding: 0;
  color: #222;
  list-style-type: none;
  overflow: hidden;
  transition: height 0.2s;
`;

const ListItem = styled.li`
  max-width: 300px;
  margin: 1px auto;
  padding: 10px 25px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-weight: bold;
  position: relative;
`;

const DeleteButton = styled.i`
  color: #999;
  position: absolute;
  right: 8px;
  cursor: pointer;
  &:hover {
    color: #222;
  }
`;

class List extends Component {
  onClickClose(index, event) {
    var index = parseInt(index);
    console.log(index);
    this.props.removeItem(index);
  }

  render() {
    return (
      <ItemsList className="itemsList">
        {this.props.items.map((item, index) => (
          <ListItem key={index}>
            {item}
            <DeleteButton className="fa fa-times" aria-hidden="true" onClick={this.onClickClose.bind(this, index)} />
          </ListItem>
        ))}
      </ItemsList>
    );
  }
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    }
  }

  onChange = event => {
    const button = document.querySelector('.startStopButton');
    this.setState({ item: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      item: "",
      items: [...this.state.items, this.state.item]
    });

    if (x === 1) {
      document.querySelector(".startStopButton").style.opacity = 1;
    }
    x++;
  };

  removeItem(itemIndex) {
    let allItems = this.state.items;
    allItems.splice(itemIndex, 1);
    let newItems = allItems;
    this.setState({items: newItems});
  }

  render() {
    return (
      <div>
        <form className="addItemForm" onSubmit={this.onSubmit}>
          <Label>
            <input value={this.state.item} onChange={this.onChange} />
            <button type="submit">add item</button>
          </Label>
        </form>
        <List items={this.state.items} removeItem={() => this.removeItem()} />
      </div>
    );
  }
}

export default ItemList;
