import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import Attributes from "../../../components/Product/Attributes";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Description.module.css";

class Description extends Component {
  state = {};
  attributesRef = React.createRef();

  submitForm = (product) => {
    console.log("ref", this.attributesRef.current);
  };

  setAttributes = (key, value) => {};

  render() {
    const { product } = this.props;
    const { brand, name, description, prices, attributes, inStock } = product;

    if (!this.props.product) return null;

    return (
      <div className={styles.description}>
        <Title brand={brand} name={name} />
        <Attributes attributes={attributes} ref={this.attributesRef} />
        <section>
          <h4 className={styles.price}>PRICE:</h4>
          <Price prices={prices} />
        </section>

        <button
          className={cx(
            styles.button_addToCart,
            !inStock && styles.button_addToCart_disabled
          )}
          disabled={!inStock}
          onClick={this.submitForm}
        >
          ADD TO CART
        </button>

        <article
          className={styles.description__article}
          dangerouslySetInnerHTML={{ __html: description }}
        ></article>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItemToCart(item)),
  };
}

export default connect(null, mapDispatchToProps)(Description);
