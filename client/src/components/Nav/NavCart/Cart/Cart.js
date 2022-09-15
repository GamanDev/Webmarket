import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./Item/CartItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      ItemsInCart: this.props.ItemsInCart,
      updated: this.props.updated,
    };
  }

  componentDidMount() {
    this.setState({ count: this.props.count });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.updated !== this.props.updated) {
      this.setState({
        ...this.state,
        ItemsInCart: this.props.ItemsInCart,
        updated: this.props.updated,
      });
    }
  }

  render() {
    return (
      <div className={styles.mybag}>
        {this.state.updated > 0 ? (
          <>
            <div>
              {" "}
              <strong>My Bag,</strong>{" "}
              {this.props.ItemsInCart.reduce((acc, item) => {
                return acc + item.count;
              }, 0)}{" "}
              Items
            </div>
            <CartItem
              client={this.props.client}
              currency={this.props.currency}
            />
            <div className={styles.cart__total}>
              <div>Total</div>
              <div className={styles.cart__total_price}>
                <div>{this.props.currSign.currency.symbol}</div>
                <div>
                  {this.state.ItemsInCart &&
                    this.state.ItemsInCart.reduce((acc, price) => {
                      let result =
                        acc +
                        price.price[this.props.currency].amount * price.count;
                      return result;
                    }, 0).toFixed(2)}
                </div>
              </div>
            </div>
            <div className={styles.cart__buttons}>
              <Link to="/cart">
                <button className={styles.cart__buttons_viewbag}>
                  VIEW BAG
                </button>
              </Link>

              <button className={styles.cart__buttons_checkout}>
                CHECK OUT
              </button>
            </div>
          </>
        ) : (
          <div className={styles.mybag}>
            {" "}
            <strong>Cart is Empty</strong>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ItemsInCart: state.cartReducer.ItemsInCart,
    updated: state.cartReducer.updated,
  };
}

export default connect(mapStateToProps)(Cart);
