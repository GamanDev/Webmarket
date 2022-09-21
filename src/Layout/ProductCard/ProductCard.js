import React, { Component } from "react";

import cx from "classnames";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  render() {
    const { name, gallery, prices, inStock, id } = this.props;
    return (
      <Link
        to={`/product/${id}`}
        className={cx(styles.card, !inStock && styles.card_outOfStock)}
      >
        <img src={gallery[0]} alt="pic" className={styles.card__image} />
        <div>{name}</div>
        <div className={styles.price}>
          <div>{prices[0].currency.symbol}</div>
          <div>{prices[0].amount}</div>
        </div>

        {!inStock && <div className={styles.no_text}>Out Of Stock</div>}
      </Link>
    );
  }
}
