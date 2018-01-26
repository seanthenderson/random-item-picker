import React, { Component } from "react";
import styled from 'styled-components';

let x = 0;
let items = [];

const Label = styled.label`
  color: #dcdcdc;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const Input = styled.input`
  margin: 0 3px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
  grid-column: span 9;
`;

const Button = styled.button`
  margin-left: -3px;
  padding: 15px 12px;
  background: rgb(17, 90, 248);
  border: 1px solid rgb(17, 90, 248);
  color: #ececec;
  font-size: 18px;
  cursor: pointer;
  grid-column: span 1;
  @media (max-width: 400px) {
    padding: 5px;
  }
`;

const ItemsButton = styled.div`
  grid-column: span 10;
`;

const ItemsList = styled.ul`
  padding: 0;
  color: #222;
  list-style-type: none;
  overflow: hidden;
  transition: height 0.2s;
`;

const ListItem = styled.li`
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

const Form = styled.form`
  margin-top: 20px;
`;

class List extends Component {
  onClickClose(index, e) {
    let itemIndex = parseInt(index);
    this.props.removeItem(itemIndex);
  }

  render() {
    return (
      <ItemsList className="itemsList">
        {this.props.items.map((item, index) => (
          <ListItem key={index}>
            {item}
            <DeleteButton className="fa fa-times" aria-hidden="true" index={index} onClick={this.onClickClose.bind(this, index)} />
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
    },
    this.removeItem = this.removeItem.bind(this);
  }

  onChange = event => {
    //const button = document.querySelector('.startStopButton');
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

    const button = document.querySelector('.startStopButton');
    newItems.length < 2 ? button.style.opacity = 0 : null;

    x--;
  }

  render() {
    return (
      <ItemsButton>
        <Form className="addItemForm" onSubmit={this.onSubmit}>
          <Label>
            <Input value={this.state.item} type="text" onChange={this.onChange} placeholder="add an item, name, task, etc." />
            <Button type="submit">add</Button>
          </Label>
        </Form>
        <List items={this.state.items} removeItem={this.removeItem} />
      </ItemsButton>
    );
  }
}

export default ItemList;
