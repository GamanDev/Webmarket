import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import styles from "./index.module.css";
import Button from "../../components/Buttons/Button";
import Total from "./Total";
import { showTotalCount } from "../../utils/showTotalCount";

class Product extends Component {
  render() {
    const { currencyIndex, ItemsInCart } = this.props;
    const itemsCount = showTotalCount(ItemsInCart);
    return (
      <div className={styles.cart}>
        <div>
          <h2 className={styles.header}>Cart</h2>
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
            <Button value="Order" className={styles.order} />
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
