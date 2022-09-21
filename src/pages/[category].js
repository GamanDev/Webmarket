import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import styles from "./Main.module.css";
import ProductCard from "./ProductCard/ProductCard";

console.log(window.location.pathname);

class Main extends Component {
  render() {
    const { category } = this.props.data;
    if (!category) return null;
    return (
      <div>
        <h2>{category.name}</h2>
        <div className={styles.products}>
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              url={product.gallery[0]}
              name={product.name}
              inStock={product.inStock}
              symbol={product.prices[0].currency.symbol}
              price={product.prices[0].amount}
              id={product.id}
              // {...product} use props in component
            />
          ))}
        </div>
      </div>
    );
  }
}

export default graphql(
  gql`
    query ($category: String! = "all") {
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
