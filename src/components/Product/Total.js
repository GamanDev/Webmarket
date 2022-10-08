import React, { Component } from "react";
import styles from "./Total.module.css";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;
    return (
      <div className={styles.total}>
        <h4 className={styles.title}>Total</h4>
        <div>
          <strong>
            {ItemsInCart[0].item.prices[currencyIndex].currency.symbol}
            {ItemsInCart.reduce(
              (acc, val) =>
                acc + val.item.prices[currencyIndex].amount * val.amount,
              0
            ).toFixed(2)}
          </strong>
        </div>
      </div>
    );
  }
}
