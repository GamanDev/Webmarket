import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

class Product extends Component {
  render() {
    const { ItemsInCart } = this.props;
    if (!ItemsInCart.length) return <div>Cart Is Empty</div>;
    console.log(ItemsInCart);
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
