import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import styles from "./index.module.css";

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
    const { currencyIndex, ItemsInCart } = this.props;

    if (this.state.isCartOpen)
      document.addEventListener("click", () =>
        this.setState({ isCartOpen: false })
      );
    // if (!ItemsInCart) return null;
    return (
      <main>
        <div className={styles.cart} onClick={this.toggleCart}>
          <div className={styles.cart_composition}>
            <img src="/assets/img/cart.png" alt="cart" />
            <img
              src="/assets/img/cart_wheel.png"
              alt="wheel"
              className={styles.wheel_1}
            />
            <img
              src="/assets/img/cart_wheel.png"
              alt="wheel"
              className={styles.wheel_2}
            />
          </div>
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
