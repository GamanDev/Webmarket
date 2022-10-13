import React, { Component } from "react";
import Item from "../../Product";
import cx from "classnames";
import styles from "./Cart.module.css";
import { showTotalCount } from "../../../utils/showTotalCount";
import Total from "../../Product/Total";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    const { toggleCart, currencyIndex, ItemsInCart } = this.props;

    const itemsCount = showTotalCount(ItemsInCart);

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
                  <Button value="View Bag" className={styles.viewBag} />
                </Link>
                <Button value="Checkout" className={styles.checkout} />
              </section>
            </>
          )}
        </div>
      </div>
    );
  }
}
