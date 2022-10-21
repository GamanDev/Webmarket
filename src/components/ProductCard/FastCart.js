import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions";
import styles from "./index.module.css";

class FastCart extends Component {
  addFastCart = (product) => {
    const item = {
      key: product.product.id + "-",
      item: { ...product.product },
      selected: [],
    };
    this.props.addItem(item);
  };

  render() {
    const { item } = this.props;

    return (
      <button
        className={styles.fast_cart}
        onClick={() => this.addFastCart(item)}
      >
        <img src="assets/img/fast_cart.svg" alt="" className={styles.cart} />
      </button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItemToCart(item)),
  };
}

export default connect(null, mapDispatchToProps)(FastCart);
