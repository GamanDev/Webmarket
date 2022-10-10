import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/actions";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    const { amount, addItem, removeItem, className } = this.props;

    return (
      <div className={styles.counter}>
        <button className={className}>+</button>
        <span>{amount}</span>
        <button className={className}>-</button>
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
