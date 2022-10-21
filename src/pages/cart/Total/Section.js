import React, { Component } from "react";
import styles from "./Section.module.css";

export default class Section extends Component {
  render() {
    const { value, heading } = this.props;

    return (
      <div className={styles.total}>
        <div className={styles.heading}>{heading}:</div>
        <div className={styles.value}>{value}</div>
      </div>
    );
  }
}
