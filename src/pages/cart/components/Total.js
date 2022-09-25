import React, { Component } from "react";
import styles from "./Total.module.css";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    return (
      <main className={styles.main__total}>
        <div className={styles.tax}>
          Tax 21%:{" "}
          <strong>
            <span style={{ marginLeft: "16px" }}>
              {ItemsInCart[0].prices[currencyIndex].currency.symbol}
              {ItemsInCart.reduce(
                (acc, val) =>
                  (acc + val.count * val.prices[currencyIndex].amount) * 0.21,
                0
              ).toFixed(2)}
            </span>
          </strong>
        </div>
        <div className={styles.quantity}>
          Quantity:{" "}
          <strong>
            {ItemsInCart.length > 0 && (
              <span className={styles.items__count}>
                {ItemsInCart.reduce((acc, val) => acc + val.count, 0)}
              </span>
            )}
          </strong>
        </div>
        <div className={styles.total}>
          <section>Total:</section>
          <div className={styles.amount}>
            <div>{ItemsInCart[0].prices[currencyIndex].currency.symbol}</div>
            <div>
              {ItemsInCart.reduce(
                (acc, val) =>
                  acc + val.count * val.prices[currencyIndex].amount,
                0
              ).toFixed(2)}
            </div>
          </div>
        </div>
        <button className={styles.buttons_order}>ORDER</button>
      </main>
    );
  }
}
