import React, { Component } from "react";
import { dataFetching } from "../../../../../utils/dataFetching";
import { productById } from "../../../../../utils/gql/productById";
import left from "../../../../../img/vector_left.png";
import right from "../../../../../img/vector_right.png";

import styles from "./Bigcartitemimage.module.css";

export default class BigCartItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", product: [], index: 0 };
  }

  componentDidMount() {
    this.setState({ ...this.state, id: this.props.item });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== prevState.id) {
      dataFetching(this.props, productById(this.state.id)).then((result) =>
        this.setState({
          ...this.state,
          product: result.data.product,
        })
      );
    }
    if (prevProps.currency !== this.state.curr) {
      this.setState({ curr: this.props.currency });
    }
  }
  render() {
    const next = () => {
      if (
        this.state.product.gallery &&
        this.state.product.gallery.length &&
        this.state.index === this.state.product.gallery.length - 1
      ) {
        this.setState({
          ...this.state,
          index: 0,
        });
      }
      if (
        this.state.product.gallery &&
        this.state.product.gallery.length > 1 &&
        this.state.index < this.state.product.gallery.length - 1
      ) {
        this.setState({
          ...this.state,
          index: this.state.index + 1,
        });
      }
    };

    const prev = () => {
      if (
        this.state.product.gallery &&
        this.state.product.gallery.length &&
        this.state.index === 0
      ) {
        this.setState({
          ...this.state,
          index: this.state.product.gallery.length - 1,
        });
      }
      if (
        this.state.product.gallery &&
        this.state.product.gallery.length > 1 &&
        this.state.index > 0
      ) {
        this.setState({
          ...this.state,
          index: this.state.index - 1,
        });
      }
    };

    return (
      <div>
        {this.state.product.gallery && this.state.product.gallery.length > 1 && (
          <div className={styles.image_control}>
            <img
              src={this.state.product.gallery[this.state.index]}
              alt=""
              className={styles.big_cart_image}
            />
            <div className={styles.image_buttons}>
              <div className={styles.vector} onClick={prev}>
                <img src={left} alt="left" />
              </div>

              <div className={styles.vector} onClick={next}>
                <img src={right} alt="left" />
              </div>
            </div>
          </div>
        )}
        {this.state.product.gallery &&
          this.state.product.gallery.length === 1 && (
            <img
              src={this.state.product.gallery[0]}
              alt=""
              className={styles.big_cart_image}
            />
          )}
      </div>
    );
  }
}
