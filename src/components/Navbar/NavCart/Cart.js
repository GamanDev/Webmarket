import React, { Component } from "react";
import Item from "../../Product";

import styles from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { toggleCart, ItemsInCart, currencyIndex } = this.props;

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          <h2>
            Items in Cart:{" "}
            {ItemsInCart.reduce((acc, val) => acc + val.amount, 0)}
          </h2>
          {ItemsInCart.map((product) => (
            <Item
              key={product.key_unique}
              item={product.item}
              currencyIndex={currencyIndex}
              options={product.options}
              amount={product.amount}
              key_unique={product.key_unique}
              className={"mini"}
            />
          ))}
        </div>
      </div>
    );
  }
}

// mapStateToProps -> ItemsInCart.map(item => ... <Product key... {...props} id, count, {checked,noChecked}=boxes  />)
