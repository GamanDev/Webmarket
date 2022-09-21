import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import styles from "./Main.module.css";
import ProductCard from "./ProductCard/ProductCard";

class Layout extends Component {
  render() {
    const { loading, category } = this.props.data;
    console.log("aa", this.props);
    if (loading) return null;
    return (
      <div>
        <h2>{category.name}</h2>
        <div className={styles.products}>
          {category.products.map((product) => (
            <ProductCard key={product.id} {...product} />
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
        // category: window.location.pathname.replace("/bliminse/", ""),
        category: props.location.pathname.replace("/", ""),
      },
    }),
  }
)(Layout);
