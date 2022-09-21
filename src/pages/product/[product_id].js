import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import styles from "./Product.module.css";

// semantic tags
// product/:product_id
//loading graphql
// react categoryze
//this.location...

class Product extends Component {
  render() {
    const { loading, product } = this.props.data;
    console.log(product);
    if (loading) return null;
    return (
      <div>
        <div>{product.brand}</div>
        <div>{product.category}</div>
        <div>
          {product.attributes.map((attribute) => (
            <div key={attribute.id}>
              <div>{attribute.name}</div>
              <div className={styles.selectors}>
                {attribute.items.map((item) => (
                  <div key={item.id} className={styles.select}>
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
      variables: {
        id: window.location.pathname.replace("/product/", ""),
      },
    }),
  }
)(Product);
