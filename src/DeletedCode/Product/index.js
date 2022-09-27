import React, { Component } from "react";
import { connect } from "react-redux";
import Total from "./components/Total";
import Item from "./Item";
import styles from "./index.module.css";

class Product extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    if (!ItemsInCart.length) return <div>Cart Is Empty</div>;

    return (
      <main className={styles.main}>
        <section className={styles.myBag}>
          <div className={styles.cart__title}>My Bag,</div>&nbsp;
          <div className={styles.cart__count}>
            {ItemsInCart.reduce((acc, val) => acc + val.count, 0)} items
          </div>
        </section>
        {ItemsInCart.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <Total ItemsInCart={ItemsInCart} currencyIndex={currencyIndex} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    ItemsInCart: state.cart.ItemsInCart,
    currencyIndex: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(Product);
