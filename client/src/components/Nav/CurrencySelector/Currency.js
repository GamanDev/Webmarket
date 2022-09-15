import React, { Component } from "react";
import { setCurrency } from "../../../utils/currency/setCurrency";
import { dataFetching } from "../../../utils/dataFetching";
import { currency } from "../../../utils/gql/currency";
import styles from "./Currency.module.css";

export default class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = { currencies: [] };
    this.currencySetter = this.props.currencySetter;
    this.onCurrSelect = this.props.changer;
  }

  componentDidMount() {
    dataFetching(this.props, currency).then((result) =>
      this.setState({
        currencies: result.data.categories[0].products[0].prices,
      })
    );
  }

  render() {
    const handleClick = (e) => {
      e.stopPropagation();
      this.currencySetter(setCurrency(e.target.innerHTML));
      this.onCurrSelect(setCurrency(e.target.innerHTML));
    };
    return (
      <div className={styles.currency} onClick={this.props.onCurrencyChange}>
        {this.state.currencies &&
          this.state.currencies.map((curr) => (
            <div
              key={curr.currency.symbol}
              className={styles.currency__blocks}
              onClick={handleClick}
            >
              <div className={styles.currenncy__symbol}>
                {curr.currency.symbol}
              </div>
              <div className={styles.currenncy__label}>
                {curr.currency.label}
              </div>
            </div>
          ))}
      </div>
    );
  }
}
