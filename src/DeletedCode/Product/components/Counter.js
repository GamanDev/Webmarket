import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../redux/actions";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    const { count, key_unique, addItem, removeItem } = this.props;

    return (
      <div className={styles.counter}>
        <button
          className={styles.cart__buttons}
          onClick={() => addItem({ key_unique })}
        >
          +
        </button>
        <section className={styles.count}>{count}</section>
        <button
          className={styles.cart__buttons}
          onClick={() => removeItem({ key_unique })}
        >
          -
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (id) => dispatch(addItemToCart(id)),
    removeItem: (id) => dispatch(removeItemFromCart(id)),
  };
}

export default connect(null, mapDispatchToProps)(Counter);
