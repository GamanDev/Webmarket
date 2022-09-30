import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../../components/Product";

import styles from "./Index.module.css";

class Product extends Component {
  render() {
    const { ItemsInCart, currencyIndex } = this.props;
    if (!ItemsInCart.length) return <div>Cart Is Empty</div>;

    return (
      <>
        <h2 className={styles.title}>Cart</h2>
        {ItemsInCart.map((product) => (
          <Item
            key={product.key_unique}
            item={product.item}
            currencyIndex={currencyIndex}
            options={product.options}
            amount={product.amount}
            key_unique={product.key_unique}
            className={"cart"}
          />
        ))}
      </>
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
