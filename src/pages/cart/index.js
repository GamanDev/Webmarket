import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../../components/Product";

import styles from "./Index.module.css";
import Total from "./Total";

class Product extends Component {
  render() {
    return;
  }
}

function mapStateToProps(state) {
  return {
    ItemsInCart: state.cart.ItemsInCart,
    currencyIndex: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(Product);
