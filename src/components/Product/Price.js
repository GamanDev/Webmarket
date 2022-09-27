import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Price.module.css";

class Price extends Component {
  render() {
    const { prices, currency } = this.props;
    return (
      <div className={styles.prices}>
        <div>{prices[currency].currency.symbol}</div>
        <div>{prices[currency].amount}</div>
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
