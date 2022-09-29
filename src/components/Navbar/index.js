import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import NavCart from "./NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { categories } = this.props.data;
    return (
      <nav className={styles.nav}>
        <section className={styles.nav__links}>
          {categories.map((category) => (
            <Link key={category.name} to={`/${category.name}`}>
              {category.name.toUpperCase()}
            </Link>
          ))}
          <Link to="/cart">Cart</Link>
        </section>
        <section>Green Logo</section>
        <button onClick={() => console.log(this.props.ItemsInCart)}>
          state
        </button>
        <section className={styles.nav__curr_n_cart}>
          <CurrencySelector />
          <NavCart />
        </section>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ItemsInCart: state.cart.ItemsInCart,
  };
};

export default connect(mapStateToProps)(
  graphql(
    gql`
      query {
        categories {
          name
        }
      }
    `
  )(Nav)
);
