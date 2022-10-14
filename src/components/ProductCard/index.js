import React, { Component } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FastCart from "./FastCart";
import styles from "./index.module.css";

class ProductCard extends Component {
  render() {
    const { currency, product } = this.props;
    const { name, gallery, prices, inStock, id, brand, attributes } = product;
    if (!product) return null;
    return (
      <span>
        <Link
          to={`/product/${id}`}
          className={cx(styles.card, !inStock && styles.outOfStock)}
        >
          <img src={gallery[0]} alt="pic" className={styles.image} />
          <div className={styles.footer}>
            <div>{`${brand} ${name}`}</div>
            <div className={styles.price}>
              <div>{prices[currency].currency.symbol}</div>
              <div>{prices[currency].amount}</div>
            </div>
          </div>
          {!inStock && <div className={styles.text}>Out Of Stock</div>}
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
