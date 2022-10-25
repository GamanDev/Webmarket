import React, { Component } from "react";
import { connect } from "react-redux";
import Total from "./Total";
import Product from "../../components/Product";
import { getTotalCount } from "../../utils";
import styles from "./index.module.css";

class Cart extends Component {
  render() {
    const { currencyIndex, ItemsInCart } = this.props;
    const itemsCount = getTotalCount(ItemsInCart);

    const classNames = {
      title: styles.title_cart,
      counter: styles.counter_cart,
      image: styles.image_cart,
      border: styles.border_cart,
    };

    return (
      <div className={styles.cart}>
        <div>
          <h1 className={styles.header}>Cart</h1>

          <Product
            currencyIndex={currencyIndex}
            ItemsInCart={ItemsInCart}
            classNames={classNames}
            pagination={true}
          />
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

export default connect(mapStateToProps)(Cart);
