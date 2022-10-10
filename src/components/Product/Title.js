import React, { Component } from "react";
import cx from "classnames";
import styles from "./Title.module.css";

export default class Title extends Component {
  render() {
    const { brand, name, className } = this.props;

    return (
      <>
        <div className={cx(styles.brand, className)}>{brand}</div>
        <div className={cx(styles.name, className)}>{name}</div>
      </>
    );
  }
}
