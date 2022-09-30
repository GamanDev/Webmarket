import React, { Component } from "react";
import cx from "classnames";
import styles from "./Title.module.css";

export default class Title extends Component {
  render() {
    const { brand, name, stl } = this.props;

    const brandCSS = `brand_${stl}`;
    const nameCSS = `name_${stl}`;

    return (
      <>
        <div className={cx(styles.brand, stl && styles[brandCSS])}>{brand}</div>
        <div className={cx(styles.name, stl && styles[nameCSS])}>{name}</div>
      </>
    );
  }
}
