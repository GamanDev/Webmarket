import React, { Component } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";
let cx = classNames.bind(styles);

export default class Card extends Component {
  render() {
    const { url, name, price, inStock } = this.props;

    return (
      <div className={cx(inStock ? styles.card : styles.card_outOfStock)}>
        <img src={url} alt="pic" className={styles.card__image} />
        <div>{name}</div>
        <div>{price}</div>
        <div className={cx(inStock ? styles.text : styles.no_text)}>
          Out Of Stock
        </div>
      </div>
    );
  }
}
