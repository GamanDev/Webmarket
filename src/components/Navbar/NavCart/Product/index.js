import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Total from "./components/Total";
import Item from "./Item";
import styles from "./Index.module.css";

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
          <Item key={uuidv4()} id={item.id} item={item} />
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
