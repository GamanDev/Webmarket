import React, { Component } from "react";
import Item from "../../Product";
import cx from "classnames";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    const { toggleCart, ItemsInCart, currencyIndex } = this.props;

    return (
      <div className={styles.modal} onClick={toggleCart} scroll="no">
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
              item={product.item}
              currencyIndex={currencyIndex}
              options={product.options}
              amount={product.amount}
              key_unique={product.key_unique}
              className={"mini"}
            />
          ))}
          {ItemsInCart.length > 0 && (
            <div className={styles.total}>
              <h4 style={{ fontFamily: "Roboto" }}>Total</h4>
              <div style={{ fontWeight: "700" }}>
                <span>
                  {ItemsInCart[0].item.prices[currencyIndex].currency.symbol}
                </span>
                <span>
                  {ItemsInCart.reduce(
                    (acc, val) =>
                      acc + val.item.prices[currencyIndex].amount * val.amount,
                    0
                  ).toFixed(2)}
                </span>
              </div>
            </div>
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
