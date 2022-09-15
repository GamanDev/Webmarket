import React, { Component } from "react";
import styles from "./Sort.module.css";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.low = this.props.low;
    this.high = this.props.high;
    this.inStock = this.props.inStock;
    this.defaultSort = this.props.defaultSort;
  }

  render() {
    return (
      <div className={styles.sorter}>
        <div className={styles.select} onClick={this.low}>
          Lowest Price
        </div>
        <div className={styles.select} onClick={this.high}>
          Highest Price
        </div>
        <div className={styles.select} onClick={this.inStock}>
          in Stock
        </div>
        <div className={styles.select} onClick={this.defaultSort}>
          Default
        </div>
      </div>
    );
  }
}
