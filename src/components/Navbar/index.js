import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import cx from "classnames";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import CurrencySelector from "./CurrencySelector";
import NavCart from "./NavCart";
import styles from "./index.module.css";

class Nav extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { location, data } = this.props;
    const { categories } = data;

    return (
      <nav className={styles.nav}>
        <section className={styles.links}>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name}`}
              className={cx(
                location.pathname === `/${category.name}` && styles.active
              )}
            >
              {category.name.toUpperCase()}
            </Link>
          ))}
        </section>

        <section className={styles.logo}>
          <img src="/assets/img/green_logo.svg" alt="logo" />
        </section>

        <section className={styles.currency_n_cart}>
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
)(withRouter(Nav));
