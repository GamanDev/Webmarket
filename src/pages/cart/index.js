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
    console.log(ItemsInCart);
    return (
      <>
        <h2 className={styles.title}>Cart</h2>
        {ItemsInCart.map((item) => (
          <Item key={uuidv4()} id={item.id} item={item} />
        ))}
        <Total ItemsInCart={ItemsInCart} currencyIndex={currencyIndex} />
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
