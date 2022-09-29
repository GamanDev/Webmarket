import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import NavCart from "./NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";

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
        <section className={styles.nav__curr_n_cart}>
          <CurrencySelector />
          <NavCart />
        </section>
      </nav>
    );
  }
}

export default graphql(
  gql`
    query {
      categories {
        name
      }
    }
  `
)(Nav);
