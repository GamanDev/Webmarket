import React, { Component } from "react";
import { showPriceSymbol } from "../../utils/priceSymbol";
import { showTotalPrice } from "../../utils/showTotalPrice";
import styles from "./Total.module.css";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    const itemsCount = showTotalPrice(ItemsInCart, currencyIndex);
    const symbol = showPriceSymbol(ItemsInCart, currencyIndex);
    if (!ItemsInCart) return null;
    return (
      <div className={styles.total}>
        <h4 className={styles.title}>Total</h4>
        <div>
          {symbol}
          {itemsCount}
        </div>
      </div>
    );
  }
}
