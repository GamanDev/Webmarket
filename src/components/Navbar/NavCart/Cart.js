import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Product from "../../Product";
import Total from "../../Product/Total";
import { getTotalCount } from "../../../utils";
import styles from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { toggleCart, currencyIndex, ItemsInCart } = this.props;
    const itemsCount = getTotalCount(ItemsInCart);

    const classNames = {
      title: styles.title_mini,
      price: styles.price_mini,
      text: styles.text_mini,
      swatch: styles.swatch_mini,
      counter: styles.counter_mini,
      image: styles.image_mini,
    };

    if (!ItemsInCart) return null;

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          <header className={cx(styles.header, !itemsCount && styles.empty)}>
            <strong>My bag,</strong> {itemsCount} items
          </header>

          <Product
            currencyIndex={currencyIndex}
            ItemsInCart={ItemsInCart}
            classNames={classNames}
          />

          {itemsCount > 0 && (
            <>
              <Total currencyIndex={currencyIndex} ItemsInCart={ItemsInCart} />
              <section className={styles.buttons}>
                <Link to="/cart" onClick={toggleCart}>
                  <button className={styles.viewBag}> View Bag</button>
                </Link>
                <button className={styles.checkout}>Checkout</button>
              </section>
            </>
          )}
        </div>
      </div>
    );
  }
}
