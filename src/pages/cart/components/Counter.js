import React, { Component } from "react";
import styles from "./Counter.module.css";

export default class Counter extends Component {
  render() {
    const { count } = this.props;
    return (
      <div className={styles.counter}>
        <button className={styles.cart__buttons}>+</button>
        <section>{count}</section>
        <button className={styles.cart__buttons}>-</button>
      </div>
    );
  }
}
