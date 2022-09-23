import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../../../../redux/Actions";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    const { count, key_unique, addItem } = this.props;
    console.log("pp", count);
    return (
      <div className={styles.counter}>
        <button
          className={styles.cart__buttons}
          onClick={() => addItem({ key_unique })}
        >
          +
        </button>
        <section>{count}</section>
        <button className={styles.cart__buttons}>-</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (id) => dispatch(addItemToCart(id)),
  };
}

export default connect(null, mapDispatchToProps)(Counter);
