import React, { Component } from "react";
import cx from "classnames";
import styles from "./Title.module.css";

export default class Title extends Component {
  render() {
    const { brand, name, className, classBrand } = this.props;

    return (
      <>
        <div className={cx(styles.brand, classBrand)}>{brand}</div>
        <div className={cx(styles.name, className)}>{name}</div>
      </>
    );
  }
}
