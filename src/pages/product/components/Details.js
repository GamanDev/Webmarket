import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import Attributes from "../../../components/Product/Attributes";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Details.module.css";

class Details extends Component {
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

  render() {
    const { product } = this.props;
    const { brand, name, description, prices, attributes, inStock } = product;
    console.log("details", description);
    if (!this.props.product) return null;
    return (
      <div>
        <Title brand={brand} name={name} className={styles.name} />
        <Attributes
          attributes={attributes}
          selectionsRef={this.attributesRef}
          className={styles.header}
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
