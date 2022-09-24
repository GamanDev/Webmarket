import React, { Component } from "react";
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
        <button>VIEW BAG</button>
        <button>CHECK OUT</button>
      </main>
    );
  }
}
