import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { getTotalCount } from "../../../utils";
import styles from "./index.module.css";

class NavCart extends Component {
  state = {
    isCartOpen: false,
  };

  toggleCart = (e) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      isCartOpen: !this.state.isCartOpen,
    });
  };

  render() {
    const { currencyIndex, ItemsInCart } = this.props;
    const itemsCount = getTotalCount(ItemsInCart);

    if (this.state.isCartOpen)
      document.addEventListener("click", () =>
        this.setState({ isCartOpen: false })
      );

    return (
      <main>
        <div className={styles.cart} onClick={this.toggleCart}>
          <div className={styles.composition}>
            <img src="/assets/img/black_cart.svg" alt="cart" />
          </div>
          {itemsCount > 0 && (
            <div className={styles.showCount}>{itemsCount}</div>
          )}
        </div>
        {this.state.isCartOpen && (
          <Cart
            toggleCart={this.toggleCart}
            currencyIndex={currencyIndex}
            ItemsInCart={ItemsInCart}
          />
        )}
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

export default connect(mapStateToProps)(NavCart);
