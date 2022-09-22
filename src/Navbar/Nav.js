import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Currency from "./CurrencySelector/CurrencySelector";
import NavCart from "./NavCart/NavCart";
import styles from "./Nav.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrSelectOpen: true,
      isCartOpen: false,
    };
  }

  toggleCart = (e) => {
    e.stopPropagation();
    this.setState({
      isCartOpen: !this.state.isCartOpen,
    });
  };

  render() {
    if (!this.props.data) return null;
    return (
      <div className={styles.nav}>
        <div className={styles.nav__links}>
          <Link to="/all">All</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">Tech</Link>
        </div>
        <div>Green Logo</div>
        <div className={styles.nav__curr_n_cart}>
          <div>$</div>
          {this.state.isCurrSelectOpen && (
            <Currency
              prices={this.props.data.categories[0].products[0].prices}
            />
          )}
          <div onClick={this.toggleCart}>Cart</div>
          {this.state.isCartOpen && <NavCart toggleCart={this.toggleCart} />}
        </div>
      </div>
    );
  }
}

export default graphql(
  gql`
    query {
      categories {
        name
        products {
          prices {
            currency {
              symbol
              label
            }
          }
        }
      }
    }
  `
)(Nav);
