import React, { Component } from "react";
import Cart from "./Cart/Cart";
import styles from "./Navcart.module.css";

export default class NavCart extends Component {
  render() {
    return (
      <div className={styles.modal} onClick={this.props.onCartClick}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          <Cart
            client={this.props.client}
            currency={this.props.currency}
            currSign={this.props.currSign}
          />
        </div>
      </div>
    );
  }
}
