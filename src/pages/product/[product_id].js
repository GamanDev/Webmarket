import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Description from "./components/Description";
import PhotoCarousel from "./components/PhotoCarousel";
import BigPhoto from "./components/BigPhoto";
import styles from "./Product.module.css";

// semantic tags
// product/:product_id
//loading graphql
// react categoryze
//this.location...

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
    };
  }

  setPhotoIndex = (photoIndex) => {
    this.setState({
      photoIndex,
    });
  };

  render() {
    const { loading, product } = this.props.data;
    if (loading) return null;
    return (
      <main className={styles.main__product}>
        <PhotoCarousel
          gallery={product.gallery}
          setPhotoIndex={this.setPhotoIndex}
        />
        <BigPhoto
          gallery={product.gallery}
          photoIndex={this.state.photoIndex}
          inStock={product.inStock}
        />
        <Description product={product} />
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
        id: props.match.params.product_id,
      },
    }),
  }
)(Product);
