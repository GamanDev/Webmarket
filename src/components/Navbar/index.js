import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import NavCart from "./NavCart/NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { categories } = this.props.data;
    return (
      <div className={styles.nav}>
        <div className={styles.nav__links}>
          {categories.map((category) => (
            <Link key={category.name} to={`/${category.name}`}>
              {category.name.toUpperCase()}
            </Link>
          ))}
        </div>
        <div>Green Logo</div>
        <div className={styles.nav__curr_n_cart}>
          <CurrencySelector />
          <NavCart />
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
      }
    }
  `
)(Nav);
