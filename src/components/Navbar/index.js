import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import { connect } from "react-redux";
import cx from "classnames";
import { addLocalStorage, currencyChanger } from "../../redux/actions";
import NavCart from "./NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "ALL" };
  }

  componentDidMount() {
    if (
      localStorage.getItem("currencyIndex") !== null &&
      localStorage.getItem("cartStore") !== null
    ) {
      console.log("typeof ", typeof Storage);
      this.props.currencySelector(window.localStorage.getItem("currencyIndex"));
      this.props.addLocalStorage(
        JSON.parse(window.localStorage.getItem("cartStore"))
      );
      this.setState({ active: window.localStorage.getItem("active") });
    } else {
      this.props.currencySelector(0);
    }
  }
  render() {
    if (this.props.data.loading) return null;

    const { categories } = this.props.data;
    return (
      <nav className={styles.nav}>
        <section className={styles.nav__links}>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name}`}
              onClick={(e) => {
                this.setState({ active: e.target.innerHTML });
                window.localStorage.setItem("active", e.target.innerHTML);
              }}
              className={cx(
                this.state.active === category.name.toUpperCase() &&
                  styles.active
              )}
            >
              {category.name.toUpperCase()}
            </Link>
          ))}
        </section>
        <section className={styles.green_logo}>
          <img src="assets/img/green_logo.png" alt="." />
          <img
            src="assets/img/round_line.png"
            alt="round_line"
            className={styles.round_line}
          />
          <img
            src="assets/img/arrow.png"
            alt="round_line"
            className={styles.round_arrow}
          />
        </section>
        <section className={styles.nav__curr_n_cart}>
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
  )(Nav)
);
