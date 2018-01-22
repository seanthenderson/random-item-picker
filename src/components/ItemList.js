import React, { Component } from "react";

let x = 0;
let items = [];

const labelStyles = {
  color: "#dcdcdc"
};

const itemStyles = {
  marginTop: "10%",
  color: "#fff",
  fontFamily: "Georgia, serif",
  fontSize: "150px",
  cursor: "pointer"
};

const listStyles = {
  padding: 0,
  color: "#222",
  listStyleType: "none",
  overflow: "hidden",
  transition: "height 0.2s"
};

const listItemStyles = {
  maxWidth: "300px",
  margin: "1px auto",
  padding: "10px 25px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "3px",
  fontWeight: "bold",
  position: "relative"
};

const deleteStyles = {
  color: "#999",
  position: "absolute",
  right: "8px",
  cursor: "pointer"
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  render() {
    return (
      <ul style={listStyles} className="itemsList">
        {this.props.items.map((item, index) => (
          <li style={listItemStyles} key={index} index={index}>
            {item}
            <i style={deleteStyles} className="fa fa-times" aria-hidden="true" onClick={this.onClickClose} />
          </li>
        ))}
      </ul>
    );
  }
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    };
    this.removeItem = this.removeItem.bind(this);
  }

  onChange = event => {
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
    let newItems = items.splice(itemIndex, 1);
    this.setState({items: newItems});
  }

  render() {
    return (
      <div>
        <form className="addItemForm" onSubmit={this.onSubmit}>
          <label style={labelStyles}>
            <input value={this.state.item} onChange={this.onChange} />
            <button type="submit">add item</button>
          </label>
        </form>
        <List items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default ItemList;
