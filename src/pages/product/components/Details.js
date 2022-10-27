import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import Attributes from "../../../components/Product/Attributes";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Details.module.css";

class Details extends Component {
  state = { selects: [] };

  submitForm = () => {
    const state = this.state.selects;
    const item = this.props.product;
    const positive = state.includes(undefined);

    if (item.attributes.length === state.length && !positive) {
      const key = item.id + "-" + state.join("-");
      const selected = [...state];
      const product = { key, item, selected };
      this.props.addItem(product);
    }
  };

  onSelected = (index, value) => {
    let stateArray = this.state.selects;
    stateArray[index] = value;
    this.setState({ select: [...stateArray] });
  };

  render() {
    const { product } = this.props;
    const { brand, name, description, prices, attributes, inStock } = product;

    if (!this.props.product) return null;

    return (
      <div>
        <Title brand={brand} name={name} className={styles.name} />
        <Attributes
          attributes={attributes}
          className={styles.header}
          onSelected={this.onSelected}
          selected={this.state.selects}
        />
        <section>
          <h4 className={styles.price}>PRICE:</h4>
          <Price prices={prices} className={styles.details} />
        </section>

        <button
          className={cx(styles.addToCart, !inStock && styles.disabled)}
          disabled={!inStock}
          onClick={this.submitForm}
        >
          ADD TO CART
        </button>

        <article
          className={styles.article}
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

export default connect(null, mapDispatchToProps)(Details);
