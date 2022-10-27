import React, { Component } from "react";
import Section from "./Section";
import { calculatePrice } from "../../../utils";
import { showPriceSymbol } from "../../../utils";
import { getTotalCount } from "../../../utils";

export default class Total extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;
    const tax = 0.21;

    const itemsPrice = calculatePrice(ItemsInCart, currencyIndex);
    const symbol = showPriceSymbol(ItemsInCart, currencyIndex);
    const itemsCount = getTotalCount(ItemsInCart);
    const countTax = (itemsPrice * tax).toFixed(2);

    return (
      <div>
        <Section heading="Tax 21%" value={symbol + countTax} />
        <Section heading="Quantity" value={itemsCount} />
        <Section heading="Total" value={symbol + itemsPrice} />
      </div>
    );
  }
}
