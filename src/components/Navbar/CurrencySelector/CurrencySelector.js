import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Currency from "./Currency";

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

    const { currency, data } = this.props;
    const { prices } = data.categories[0].products[0];

    return (
      <>
        <div
          onClick={this.toogleCurrency}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <strong>{prices[currency].currency.symbol}</strong>
          {this.state.isCurrSelectOpen ? (
            <img
              src="assets/img/price_vector_up.png"
              alt="V"
              style={{ width: "11px", marginLeft: "3px" }}
            />
          ) : (
            <img
              src="assets/img/price_vector_down.png"
              alt="V"
              style={{ width: "11px", marginLeft: "3px" }}
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
