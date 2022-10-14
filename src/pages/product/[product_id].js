import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import PhotoCarousel from "./components/PhotoCarousel";
import BigPhoto from "./components/BigPhoto";
import styles from "./[product_id].module.css";
import Details from "./components/Details";

class Product extends Component {
  state = {
    photoIndex: 0,
  };

  setPhotoIndex = (photoIndex) => {
    this.setState({
      photoIndex,
    });
  };

  render() {
    const { loading, product } = this.props.data;

    if (loading) return null;

    return (
      <main className={styles.product}>
        <PhotoCarousel
          gallery={product.gallery}
          setPhotoIndex={this.setPhotoIndex}
        />
        <BigPhoto
          gallery={product.gallery}
          photoIndex={this.state.photoIndex}
          inStock={product.inStock}
        />
        <Details product={product} />
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
