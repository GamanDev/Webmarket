import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default class Nav extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.nav__links}>
          <Link to="/bliminse/all">All</Link>
          <Link to="/bliminse/clothes">Clothes</Link>
          <Link to="/bliminse/tech">Tech</Link>
        </div>
        <div>Green Logo</div>
        <div className={styles.nav__curr_n_cart}>
          <div>$</div>
          <div>Cart</div>
        </div>
      </div>
    );
  }
}
