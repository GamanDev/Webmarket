import React, { Component } from "react";
import { connect } from "react-redux";
import BigCartItem from "./BigCartItem";
import styles from "./Bigcart.module.css";

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
      <div className={styles.bigcart}>
        {this.state.updated > 0 ? (
          <>
            <BigCartItem
              client={this.props.client}
              currency={this.props.currency}
            />
            <div>
              <div className={styles.Total_section}>
                Tax 21%:{" "}
                <strong>
                  {
                    this.state.ItemsInCart[0].price[this.props.currency]
                      .currency.symbol
                  }
                  {this.state.ItemsInCart &&
                    (
                      this.state.ItemsInCart.reduce((acc, price) => {
                        let result =
                          acc +
                          price.price[this.props.currency].amount * price.count;
                        return result;
                      }, 0) * 0.21
                    ).toFixed(2)}{" "}
                </strong>
              </div>
              <div className={styles.Total_section}>
                {" "}
                Quantity:{" "}
                <strong>
                  {this.props.ItemsInCart.reduce((acc, item) => {
                    return acc + item.count;
                  }, 0)}{" "}
                </strong>
              </div>
              <div className={styles.total}>
                <div>Total:</div>
                <div className={styles.amount}>
                  <div>
                    {
                      this.state.ItemsInCart[0].price[this.props.currency]
                        .currency.symbol
                    }
                  </div>

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
            </div>

            <button className={styles.checkout}>CHECK OUT</button>
          </>
        ) : (
          <div>
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
