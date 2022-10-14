import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions";
import styles from "./index.module.css";

class FastCart extends Component {
  addFastCart = (product) => {
    const Itemobj = {
      key: product.product.id + "-",
      item: { ...product.product },
      selected: [],
    };
    this.props.addItem(Itemobj);
  };

  render() {
    const { item } = this.props;

    return (
      <button
        className={styles.fast_cart}
        onClick={() => this.addFastCart(item)}
      >
        <img
          src="assets/img/white_cart.png"
          alt=""
          className={styles.white_cart}
        />
        <img
          src="assets/img/white_wheel.png"
          alt=""
          className={styles.white_wheel1}
        />
        <img
          src="assets/img/white_wheel.png"
          alt=""
          className={styles.white_wheel2}
        />
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
