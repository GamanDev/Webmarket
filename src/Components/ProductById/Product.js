import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";

class Product extends Component {
  render() {
    console.log(this.props.data.product);
    const { product } = this.props.data;
    return (
      <>
        {this.props.data.product && (
          <div>
            <div>{product.brand}</div>
            <div>{product.category}</div>
          </div>
        )}
      </>
    );
  }
}
export default graphql(
  gql`
    query ($id: String!) {
      product(id: $id) {
        id
        name
        inStock
        category
        brand
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
      }
    }
  `,
  {
    options: (props) => ({
      variables: {
        id: props.id,
      },
    }),
  }
)(Product);
