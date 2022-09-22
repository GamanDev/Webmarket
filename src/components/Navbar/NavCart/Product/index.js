import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

class Product extends Component {
  render() {
    console.log(this.props.ItemsInCart);
    if (!this.props.ItemsInCart) return null;
    const { ItemsInCart } = this.props;
    return (
      <>
        {ItemsInCart.map((item) => (
          <Item key={uuidv4()} id={item.id} item={item} />
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    ItemsInCart: state.cart.ItemsInCart,
  };
}

export default connect(mapStateToProps)(Product);
