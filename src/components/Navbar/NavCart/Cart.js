import React, { Component } from "react";

import styles from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { toggleCart } = this.props;

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          3301
        </div>
      </div>
    );
  }
}

// mapStateToProps -> ItemsInCart.map(item => ... <Product key... {...props} id, count, {checked,noChecked}=boxes  />)
