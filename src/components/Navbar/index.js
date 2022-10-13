import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import cx from "classnames";
import NavCart from "./NavCart";
import CurrencySelector from "./CurrencySelector";
import { addLocalStorage, currencyChanger } from "../../redux/actions";
import styles from "./index.module.css";

class Nav extends Component {
  componentDidMount() {
    if (
      localStorage.getItem("currencyIndex") !== null &&
      localStorage.getItem("cartStore") !== null
    ) {
      this.props.currencySelector(window.localStorage.getItem("currencyIndex"));
      this.props.addLocalStorage(
        JSON.parse(window.localStorage.getItem("cartStore"))
      );
    } else {
      this.props.currencySelector(0);
    }
  }
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
          <img src="/assets/img/green_logo.png" alt="." />
          <img
            src="/assets/img/round_line.png"
            alt="round_line"
            className={styles.round_line}
          />
          <img
            src="/assets/img/arrow.png"
            alt="round_line"
            className={styles.round_arrow}
          />
        </section>

        <section className={styles.currency_n_cart}>
          <CurrencySelector />
          <NavCart />
        </section>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    currencySelector: (id) => dispatch(currencyChanger(id)),
    addLocalStorage: (prodcts) => dispatch(addLocalStorage(prodcts)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(
  graphql(
    gql`
      query {
        categories {
          name
        }
      }
    `
  )(withRouter(Nav))
);
