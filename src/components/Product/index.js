import React, { Component } from "react";
import Item from "./Item";

export default class Product extends Component {
  render() {
    const { ItemsInCart, currencyIndex, classNames, pagination } = this.props;

    return Object.values(ItemsInCart).map((product) => (
      <Item
        key={product.key}
        currencyIndex={currencyIndex}
        ItemsInCart={product}
        classNames={classNames}
        pagination={pagination}
      />
    ));
  }
}
