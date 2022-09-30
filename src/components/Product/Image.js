import React, { Component } from "react";

// "assets/img/vector_right.png";
import styles from "./Image.module.css";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  next = () => {
    if (this.state.index === this.props.gallery.length - 1) {
      this.setState({
        ...this.state,
        index: 0,
      });
    }
    if (
      this.props.gallery.length > 1 &&
      this.state.index < this.props.gallery.length - 1
    ) {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
      });
    }
  };

  prev = () => {
    if (this.props.gallery.length && this.state.index === 0) {
      this.setState({
        ...this.state,
        index: this.props.gallery.length - 1,
      });
    }
    if (this.props.gallery.length > 1 && this.state.index > 0) {
      this.setState({
        ...this.state,
        index: this.state.index - 1,
      });
    }
  };

  render() {
    const { gallery, stl } = this.props;
    const image = `image_${stl}`;

    if (stl === "mini")
      return (
        <img src={gallery[0]} alt="product_pic" className={styles[image]} />
      );

    return (
      <>
        {/* <img src="assets/img/cart_wheel.png" alt="" /> */}
        {gallery.length > 1 && (
          <div className={styles.image_control}>
            <img
              src={gallery[this.state.index]}
              alt=""
              className={styles[image]}
            />
            <div className={styles.image_buttons} onClick={this.prev}>
              <div className={styles.vector}>
                <img src="assets/img/vector_left.png" alt="left" />
              </div>

              <div className={styles.vector} onClick={this.next}>
                <img src="assets/img/vector_right.png" alt="right" />
              </div>
            </div>
          </div>
        )}
        {gallery.length === 1 && (
          <img src={gallery[0]} alt="" className={styles[image]} />
        )}
      </>
    );
  }
}
