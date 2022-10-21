import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Item from "../../Product";
import Total from "../../Product/Total";
import { getTotalCount } from "../../../utils";
import styles from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { toggleCart, currencyIndex, ItemsInCart } = this.props;

    const itemsCount = getTotalCount(ItemsInCart);
    if (!ItemsInCart) return null;

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          <header className={cx(styles.header, !itemsCount && styles.empty)}>
            <strong>My bag,</strong> {itemsCount} items
          </header>
          {Object.keys(ItemsInCart).map((product) => (
            <Item
              key={product}
              product={product}
              currencyIndex={currencyIndex}
              ItemsInCart={ItemsInCart}
            />
          ))}

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
