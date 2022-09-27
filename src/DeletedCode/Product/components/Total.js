import React, { Component } from "react";
import cx from "classnames";
import styles from "./Total.module.css";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    return (
      <main>
        <div className={styles.total}>
          <section>Total</section>
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
        <div className={styles.buttons_flex}>
          <button className={cx(styles.buttons, styles.buttons_viewbag)}>
            VIEW BAG
          </button>
          <button className={cx(styles.buttons, styles.buttons_checkout)}>
            CHECK OUT
          </button>
        </div>
      </main>
    );
  }
}
