import React, { Component } from "react";
import styles from "./Bigphoto.module.css";

export default class BigPhoto extends Component {
  render() {
    const { gallery, photoIndex } = this.props;
    return (
      <img
        src={gallery[photoIndex]}
        alt="product_picture"
        className={styles.big_photo}
      />
    );
  }
}
