import React, { Component } from "react";
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
    this.setState({
      ...this.state,
      isCurrSelectOpen: !this.state.isCurrSelectOpen,
    });
  };

  render() {
    if (this.props.data.loading) return null;

    const { prices } = this.props.data.categories[0].products[0];

    return (
      <>
        <div onClick={this.toogleCurrency}>$</div>
        {this.state.isCurrSelectOpen && (
          <Currency prices={prices} toogleCurrency={this.toogleCurrency} />
        )}
      </>
    );
  }
}

export default graphql(
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
)(CurrencySelector);
