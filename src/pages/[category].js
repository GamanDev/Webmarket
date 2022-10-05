import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Category.module.css";

class Layout extends Component {
  render() {
    const { loading, category } = this.props.data;

    if (loading) return null;

    return (
      <main className={styles.category}>
        <h2>{category.name}</h2>
        <div className={styles.products}>
          {category.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    );
  }
}

export default graphql(
  gql`
    query ($category: String! = "all") {
      category(input: { title: $category }) {
        name
        products {
          brand
          name
          gallery
          inStock
          id
          attributes {
            id
          }
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
        category: props.match.params.category,
      },
    }),
  }
)(Layout);
