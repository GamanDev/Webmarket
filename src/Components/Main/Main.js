import React, { Component } from "react";
import Card from "./Card/Card";
import styles from "./Main.module.css";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";

class Main extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.category);
    const check = this.props.data.category;

    return (
      <div>
        <h2>{123}</h2>
        <div className={styles.products}>
          {check &&
            this.props.data.category.products.map((product) => (
              <Card
                key={product.id}
                url={product.gallery[0]}
                name={product.name}
                inStock={product.inStock}
                price={product.prices[0].amount}
                symbol={product.prices[0].currency.symbol}
                id={product.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default graphql(
  gql`
    query {
      category(input: { title: "all" }) {
        name
        products {
          name
          gallery
          inStock
          id
          prices {
            amount
            currency {
              label
              symbol
            }
          }
        }
      }
    }
  `,
  {
    options: (category) => ({
      category,
    }),
  }
)(Main);
