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

    return (
      <main>
        <div className={styles.cart} onClick={this.toggleCart}>
          Cart
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
