import React, { Component } from "react";
import styles from "./Bigphoto.module.css";

export default class BigPhoto extends Component {
  render() {
    const { gallery, index } = this.props;
    return (
      <img
        src={gallery[index]}
        alt="product_picture"
        className={styles.big_photo}
      />
    );
  }
}
