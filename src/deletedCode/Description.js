import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from "../../../components/Product/Attribute";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import cx from "classnames";
import styles from "./Description.module.css";

class Description extends Component {
  state = {};
  attributesRef = React.createRef();

  submitForm = (product) => {
    // let key_unique = product.id;
    // const Itemobj = { item: product, amount: 1, options: this.state };

    // for (const item in this.state) {
    //   key_unique += `${item}-${this.state[item]}`;
    // }
    // Itemobj["key_unique"] = key_unique;
    // console.log(Itemobj);
    // this.props.addItem(Itemobj);

    console.log("ref", this.attributesRef.current);
  };

  setAttributes = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  render() {
    const { product } = this.props;
    const { brand, name, description, prices, attributes, inStock } = product;

    if (!this.props.product) return null;

    return (
      <div className={styles.description}>
        <Title brand={brand} name={name} />
        <Attribute
          ref={this.attributesRef}
          attributes={attributes}
          setAttributes={this.setAttributes}
        />
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
          onClick={() =>
            this.state &&
            Object.keys(this.state).length === product.attributes.length &&
            this.submitForm(product)
          }
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
