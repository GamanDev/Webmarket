import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyChanger } from "../../../redux/actions";
import styles from "./index.module.css";

class Currency extends Component {
  render() {
    const { prices, currencySelector, toogleCurrency } = this.props;

    if (!prices) return null;

    return (
      <div className={styles.currency} onClick={toogleCurrency}>
        {prices.map((curr, i) => (
          <div
            key={curr.currency.symbol}
            className={styles.currencies}
            onClick={() => currencySelector(i)}
          >
            <div className={styles.symbol}>{curr.currency.symbol}</div>
            <div className={styles.label}>{curr.currency.label}</div>
          </div>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currencySelector: (id) => dispatch(currencyChanger(id)),
  };
}

export default connect(null, mapDispatchToProps)(Currency);
