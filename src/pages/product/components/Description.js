import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from "../../../components/Product/Attribute";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Description.module.css";

class Description extends Component {
  submitForm = (product) => {
    console.log("state,", this.state);
    let key_unique = product.id;
    const Itemobj = {};

    for (const item in this.state) {
      key_unique += `${item}-${this.state[item]}`;
    }

    Itemobj[key_unique] = {
      item: product,
      amount: 1,
    };
    console.log(Itemobj);
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
        <Attribute attributes={attributes} setAttributes={this.setAttributes} />
        <section>
          <h4 className={styles.price}>PRICE:</h4>
          <Price prices={prices} />
        </section>

        <button
          className={styles.button_addToCart}
          disabled={!inStock}
          onClick={() => this.submitForm(product)}
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
