import React, { Component } from "react";
import { connect } from "react-redux";
import Total from "./Total";
import Item from "./Item/Item";
import { getTotalCount } from "../../utils";
import styles from "./index.module.css";

class Product extends Component {
  render() {
    const { currencyIndex, ItemsInCart } = this.props;
    const itemsCount = getTotalCount(ItemsInCart);

    return (
      <div className={styles.cart}>
        <div>
          <h1 className={styles.header}>Cart</h1>
          {Object.keys(ItemsInCart).map((product) => (
            <Item
              key={product}
              product={product}
              currencyIndex={currencyIndex}
              ItemsInCart={ItemsInCart}
            />
          ))}
        </div>
        {itemsCount > 0 && (
          <>
            <Total currencyIndex={currencyIndex} ItemsInCart={ItemsInCart} />
            <button className={styles.order}>Order</button>
          </>
        )}
      </div>
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
