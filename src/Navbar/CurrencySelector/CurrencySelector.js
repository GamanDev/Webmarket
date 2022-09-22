import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyChanger } from "../../Redux/ActionCreators/ActionCreators";
import styles from "./Currency.module.css";

class Currency extends Component {
  render() {
    const { prices, currencySelector } = this.props;
    if (!prices) return null;
    return (
      <div className={styles.currency}>
        {prices.map((curr, i) => (
          <div
            key={curr.currency.symbol}
            className={styles.currency__blocks}
            onClick={() => currencySelector(i)}
          >
            <div className={styles.currenncy__symbol}>
              {curr.currency.symbol}
            </div>
            <div className={styles.currenncy__label}>{curr.currency.label}</div>
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
