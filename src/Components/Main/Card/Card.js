import React, { Component } from "react";

import classNames from "classnames";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
let cx = classNames.bind(styles);

export default class Card extends Component {
  render() {
    const { url, name, price, inStock, symbol, id } = this.props;

    return (
      <Link
        to={`/${id}`}
        className={cx(inStock ? styles.card : styles.card_outOfStock)}
      >
        <img src={url} alt="pic" className={styles.card__image} />
        <div>{name}</div>
        <div className={styles.price}>
          <div>{symbol}</div>
          <div>{price}</div>
        </div>

        <div className={cx(inStock ? styles.text : styles.no_text)}>
          Out Of Stock
        </div>
      </Link>
    );
  }
}
