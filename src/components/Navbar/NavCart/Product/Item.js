import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Counter from "./components/Counter";
import Description from "./components/Description";
import Image from "./components/Image";
import styles from "./Product.module.css";

// Capacity:"256GB"
// Touch ID in keyboard: "Yes"
// With USB 3 ports:  "Yes"
// count:  2
// id : "apple-imac-2021"
// key_unique : "Capacity-256GBid-apple-imac-2021With USB 3 ports-YesTouch ID in keyboard-Yes"

class Item extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { product } = this.props.data;
    const { gallery } = this.props.data.product;
    console.log(product);
    const { item } = this.props;
    return (
      <main className={styles.product}>
        <Description item={item} product={product} />
        <Counter />
        <Image gallery={gallery} />
      </main>
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
      fetchPolicy: "network-only",
      variables: {
        id: props.id,
      },
    }),
  }
)(Item);
