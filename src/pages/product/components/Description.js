import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import Attributes from "../../../components/Product/Attributes";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Description.module.css";

// Item js
class Description extends Component {
  constructor(props) {
    super(props);

    this.attributesRef = React.createRef();
    this.attributesRef.current = [];
  }
  submitForm = () => {
    if (
      this.props.product.attributes.length === this.attributesRef.current.length
    ) {
      const key =
        this.props.product.id + "-" + this.attributesRef.current.join("-");
      const item = this.props.product;
      const selected = this.attributesRef.current;
      const product = { key, item, selected };
      this.props.addItem(product);
    }
  };

  submit = () => {
    console.log(
      this.props.product.attributes.length === this.attributesRef.current.length
    );
  };

  render() {
    const { product } = this.props;
    const { brand, name, description, prices, attributes, inStock } = product;
    console.log(
      product.attributes.length === this.attributesRef.current.length
    );

    if (!this.props.product) return null;
    return (
      <div className={styles.description}>
        <Title brand={brand} name={name} />
        <Attributes
          attributes={attributes}
          selectionsRef={this.attributesRef}
        />
        {/* prop drill until selected state "Select" */}
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
    addItem: (product) => dispatch(addItemToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(Description);
