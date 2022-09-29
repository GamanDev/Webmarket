import React, { Component } from "react";
import styles from "./Counter.module.css";

export default class Counter extends Component {
  render() {
    return (
      <div className={styles.counter}>
        <button className={styles.counter_buttons}>+</button>
        <span>33</span>
        <button className={styles.counter_buttons}>-</button>
      </div>
    );
  }
}
