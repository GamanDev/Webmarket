import React, { Component } from "react";
import styles from "./Navcart.module.css";

export default class NavCart extends Component {
  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.cart}></div>
      </div>
    );
  }
}
