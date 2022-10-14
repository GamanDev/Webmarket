import React, { Component } from "react";
import cx from "classnames";
import styles from "./Bigphoto.module.css";

export default class BigPhoto extends Component {
  render() {
    const { gallery, photoIndex, inStock } = this.props;

    return (
      <>
        <img
          src={gallery[photoIndex]}
          alt="product_picture"
          className={cx(styles.photo, !inStock && styles.outOfStock)}
        />
        {!inStock && <div className={styles.text}>Out Of Stock</div>}
      </>
    );
  }
}
