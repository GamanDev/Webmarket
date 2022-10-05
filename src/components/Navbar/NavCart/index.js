import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import styles from "./Navcart.module.css";

class NavCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
  }

  toggleCart = (e) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      isCartOpen: !this.state.isCartOpen,
    });
  };

  render() {
    const { ItemsInCart, currencyIndex } = this.props;

    window.localStorage.setItem("cartStore", JSON.stringify(ItemsInCart));

    if (this.state.isCartOpen)
      document.addEventListener("click", () =>
        this.setState({ isCartOpen: false })
      );
    if (!ItemsInCart) return null;
    return (
      <main>
        <div className={styles.cart} onClick={this.toggleCart}>
          <div className={styles.cart_comp}>
            <img src="assets/img/cart.png" alt="cart" />
            <img
              src="assets/img/cart_wheel.png"
              alt="wheel"
              className={styles.wheel_1}
            />
            <img
              src="assets/img/cart_wheel.png"
              alt="wheel"
              className={styles.wheel_2}
            />
          </div>
          {ItemsInCart.length > 0 && (
            <span className={styles.items__count}>
              {ItemsInCart.reduce((acc, val) => acc + val.amount, 0)}
            </span>
          )}
        </div>
        {this.state.isCartOpen && (
          <Cart
            toggleCart={this.toggleCart}
            ItemsInCart={ItemsInCart}
            currencyIndex={currencyIndex}
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
