import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Counter from "./components/Counter";
import Description from "./components/Description";
import Image from "./components/Image";
import styles from "./Product.module.css";
import Title from "../../components/Product/Title";
import Price from "../../components/Product/Price";

export class Item extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { item, data } = this.props;
    const { product } = data;
    const { gallery, brand, name, price } = product;

    return (
      <div className={styles.product}>
        <section>
          <Title brand={brand} name={name} />
          <Price price={price} />
        </section>
        <Counter count={item.count} key_unique={item.key_unique} />
        <Image gallery={gallery} />
      </div>
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
        id: props.item.id,
      },
    }),
  }
)(Item);
