import React, { Component } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import FastCart from "./FastCart";

class ProductCard extends Component {
  render() {
    const { name, gallery, prices, inStock, id, currency, brand, attributes } =
      this.props;
    console.log(attributes);
    return (
      <span>
        <Link
          to={`/product/${id}`}
          className={cx(styles.card, !inStock && styles.card_outOfStock)}
        >
          <img src={gallery[0]} alt="pic" className={styles.card__image} />
          <div className={styles.name_price}>
            <div>{`${brand} ${name}`}</div>
            <div className={styles.price}>
              <div>{prices[currency].currency.symbol}</div>
              <div>{prices[currency].amount}</div>
            </div>
          </div>
          {!inStock && <div className={styles.no_text}>Out Of Stock</div>}
        </Link>
        {inStock && !attributes.length && <FastCart item={this.props} />}
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(ProductCard);
