import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import styles from "./Price.module.css";

class Price extends Component {
  render() {
    const { prices, currency, className } = this.props;

    return (
      <div className={styles.prices}>
        <div className={cx(styles.prices, className)}>
          {prices[currency].currency.symbol}
        </div>
        <div className={cx(styles.prices, className)}>
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
