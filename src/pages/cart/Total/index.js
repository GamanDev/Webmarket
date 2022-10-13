import React, { Component } from "react";
import Section from "./Section";
import styles from "./index.module.css";
import { showTotalPrice } from "../../../utils/showTotalPrice";
import { showPriceSymbol } from "../../../utils/priceSymbol";
import { showTotalCount } from "../../../utils/showTotalCount";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    const itemsPrice = showTotalPrice(ItemsInCart, currencyIndex);
    const symbol = showPriceSymbol(ItemsInCart, currencyIndex);
    const itemsCount = showTotalCount(ItemsInCart);

    const Total = { symbol, itemsPrice };

    const countTax = (itemsPrice * 0.21).toFixed(2);
    const Tax = { symbol, itemsPrice: countTax };
    const count = { itemsCount };
    return (
      <div>
        <Section
          heading="Tax 21%"
          value={Tax}
          classHead={styles.heading}
          classValue={styles.value}
        />
        <Section
          heading="Quantity"
          value={count}
          classHead={styles.heading}
          classValue={styles.value}
        />
        <Section
          heading="Total"
          value={Total}
          classHead={styles.heading}
          classValue={styles.value}
        />
      </div>
    );
  }
}
