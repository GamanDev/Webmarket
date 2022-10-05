import React, { Component } from "react";
import styles from "./Total.module.css";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;
    return (
      <summary className={styles.total}>
        <div className={styles.headers}>
          <div className={styles.sum_descrpiption}>Tax 21%: </div>

          <section>
            <span className={styles.span}>
              {ItemsInCart[0].item.prices[currencyIndex].currency.symbol}
            </span>
            <span className={styles.span}>
              {ItemsInCart.reduce(
                (acc, val) =>
                  acc +
                  val.item.prices[currencyIndex].amount * val.amount * 0.21,
                0
              ).toFixed(2)}
            </span>
          </section>
        </div>
        <div className={styles.headers}>
          <div className={styles.sum_descrpiption}>Quantity:</div>
          <span className={styles.span}>
            {ItemsInCart.reduce((acc, val) => acc + val.amount, 0)}{" "}
          </span>
        </div>

        <div className={styles.headers}>
          <div className={styles.sum_descrpiption}> Total:</div>
          <span className={styles.span}>
            {ItemsInCart[0].item.prices[currencyIndex].currency.symbol}
          </span>
          <span className={styles.span}>
            {ItemsInCart.reduce(
              (acc, val) =>
                acc + val.item.prices[currencyIndex].amount * val.amount,
              0
            ).toFixed(2)}
          </span>
        </div>
        <button className={styles.btn_order}>ORDER</button>
      </summary>
    );
  }
}
