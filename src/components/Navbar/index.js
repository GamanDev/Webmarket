import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavCart from "./NavCart/NavCart";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import styles from "./Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.nav__links}>
          <Link to="/all">All</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">Tech</Link>
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

export default Nav;
