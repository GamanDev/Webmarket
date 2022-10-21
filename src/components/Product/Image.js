import React, { Component } from "react";
import Pagination from "../../pages/cart/Item/Pagination";
import styles from "./Image.module.css";

export default class Image extends Component {
  state = { index: 0 };

  changeIndex = (index) => {
    this.setState({ index });
  };

  render() {
    const { gallery, className } = this.props;

    if (gallery.length === 1) {
      return <img src={gallery[0]} alt="product_pic" className={className} />;
    }
    if (typeof gallery === "string") {
      return <img src={gallery} alt="product_pic" className={className} />;
    }

    return (
      <div className={styles.container}>
        <img
          src={gallery[this.state.index]}
          alt="product_pic"
          className={className}
        />
        <Pagination gallery={gallery} changeIndex={this.changeIndex} />
      </div>
    );
  }
}
