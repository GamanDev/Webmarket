import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/actions";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    const { amount, key_unique, addItem, removeItem } = this.props;
    console.log("orig", key_unique);
    return (
      <div className={styles.counter}>
        <button
          className={styles.counter_buttons}
          onClick={() => addItem({ key_unique })}
        >
          +
        </button>
        <span>{amount}</span>
        <button
          className={styles.counter_buttons}
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
