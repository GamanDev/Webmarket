import React, { Component } from "react";
import styles from "./Card.module.css";

export default class Card extends Component {
  render() {
    const { url, name, price } = this.props;
    return (
      <div className={styles.card}>
        <img src={url} alt="pic" className={styles.card__image} />
        <div>{name}</div>
        <div>{price}</div>
      </div>
    );
  }
}
