import React, { Component } from "react";
import Card from "./Card/Card";
import styles from "./Main.module.css";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";

class Main extends Component {
  render() {
    const {
      data: { variables },
    } = this.props;

    console.log(this.props);
    return (
      <div>
        <h2>{123}</h2>
        <div className={styles.products}>
          {this.props.data.category &&
            this.props.data.category.products.map((product) => (
              <Card
                key={product.id}
                url={product.gallery[0]}
                name={product.name}
                inStock={product.inStock}
                symbol={product.prices[0].currency.symbol}
                price={product.prices[0].amount}
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
    query ($category: String!) {
      category(input: { title: $category }) {
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
    options: (props) => ({
      variables: {
        category: props.category,
      },
    }),
  }
)(Main);
