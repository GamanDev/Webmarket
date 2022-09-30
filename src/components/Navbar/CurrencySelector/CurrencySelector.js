import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Currency from "./Currency";
import { connect } from "react-redux";

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrSelectOpen: false,
    };
  }

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

    const { prices } = this.props.data.categories[0].products[0];

    const { currency } = this.props;
    console.log("price", currency, prices);
    return (
      <>
        <div onClick={this.toogleCurrency}>
          {prices[currency].currency.symbol}
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
