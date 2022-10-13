import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { heading, value, classHead, classValue } = this.props;
    const { symbol, itemsPrice, itemsCount } = value;

    return (
      <div style={{ display: "flex" }}>
        <div className={classHead}>{heading}:</div>
        <div className={classValue}>
          {symbol}
          {itemsPrice}
          {itemsCount}
        </div>
      </div>
    );
  }
}
