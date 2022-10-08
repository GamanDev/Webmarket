import React, { Component } from "react";
import { connect } from "react-redux";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import Currency from "./Currency";
import styles from "./index.module.css";

class CurrencySelector extends Component {
  state = {
    isCurrSelectOpen: false,
  };

  toogleCurrency = (e) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      isCurrSelectOpen: !this.state.isCurrSelectOpen,
    });
  };

  render() {
    if (this.state.isCurrSelectOpen)
      document.addEventListener("click", () =>
        this.setState({ isCurrSelectOpen: false })
      );

    if (this.props.data.loading) return null;

    const { currency, data } = this.props;
    const { prices } = data.categories[0].products[0];

    return (
      <>
        <div onClick={this.toogleCurrency} className={styles.onCurrencyClick}>
          <strong>{prices[currency].currency.symbol}</strong>
          {this.state.isCurrSelectOpen ? (
            <img
              src="/assets/img/price_vector_up.png"
              alt="Vdown"
              className={styles.toogleArrow}
            />
          ) : (
            <img
              src="/assets/img/price_vector_down.png"
              alt="Vup"
              className={styles.toogleArrow}
            />
          )}
        </div>
        {this.state.isCurrSelectOpen && (
          <Currency prices={prices} toogleCurrency={this.toogleCurrency} />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(
  graphql(
    gql`
      query {
        categories {
          name
          products {
            prices {
              currency {
                symbol
                label
              }
            }
          }
        }
      }
    `
  )(CurrencySelector)
);
