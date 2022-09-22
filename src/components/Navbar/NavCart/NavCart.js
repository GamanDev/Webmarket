import React, { Component } from "react";
import Cart from "./Cart";

export default class NavCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
  }

  toggleCart = (e) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      isCartOpen: !this.state.isCartOpen,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.toggleCart}>Cart</div>
        {this.state.isCartOpen && <Cart toggleCart={this.toggleCart} />}
      </>
    );
  }
}
