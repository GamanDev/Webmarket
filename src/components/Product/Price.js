import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import styles from "./Price.module.css";

class Price extends Component {
  render() {
    const { prices, currency, stl } = this.props;

    const priceCSS = `prices_${stl}`;

    return (
      <div className={styles.prices}>
        <div className={cx(stl ? styles[priceCSS] : styles.prices)}>
          {prices[currency].currency.symbol}
        </div>
        <div className={cx(stl ? styles[priceCSS] : styles.prices)}>
          {prices[currency].amount}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(Price);
