import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Item from "../../Product";
import Total from "../../Product/Total";
import styles from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { toggleCart, ItemsInCart, currencyIndex } = this.props;

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.mybag}>
            <strong>My Bag,</strong>{" "}
            <span className={styles.count_items}>
              {" "}
              {ItemsInCart.reduce((acc, val) => acc + val.amount, 0)} items
            </span>
          </h2>
          {ItemsInCart.map((product) => (
            <Item
              key={product.key_unique}
              product={product}
              currencyIndex={currencyIndex}
              className={"mini"}
            />
          ))}
          {ItemsInCart.length > 0 && (
            <Total ItemsInCart={ItemsInCart} currencyIndex={currencyIndex} />
          )}

          {ItemsInCart.length > 0 && (
            <div className={styles.btn_container}>
              <Link
                to="/cart"
                className={cx(styles.button, styles.viewbag)}
                onClick={toggleCart}
              >
                View Bag
              </Link>
              <button className={cx(styles.button, styles.checkout)}>
                checkout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
