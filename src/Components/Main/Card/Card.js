import React, { Component } from "react";
import styles from "./Card.module.css";

export default class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <img
          src="http://unsplash.it/356/338"
          alt="pic"
          className={styles.card__image}
        />
        <div>Name</div>
        <div>Price</div>
      </div>
    );
  }
}
