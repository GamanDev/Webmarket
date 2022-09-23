import React, { Component } from "react";
import styles from "./Image.module.css";

export default class Image extends Component {
  render() {
    const { gallery } = this.props;
    return <img src={gallery[0]} alt="" className={styles.image} />;
  }
}
