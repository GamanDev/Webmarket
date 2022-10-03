import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import NavCart from "./NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";
import { connect } from "react-redux";
import { addLocalStorage, currencyChanger } from "../../redux/actions";

class Nav extends Component {
  componentDidMount() {
    if (typeof Storage !== "undefined") {
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
    // com

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
