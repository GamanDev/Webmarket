import React, { Component } from "react";
import styles from "./Pagination.module.css";

export default class Pagination extends Component {
  state = { index: 0 };

  next = () => {
    if (this.state.index === this.props.gallery.length - 1) {
      this.setState({
        ...this.state,
        index: 0,
      });
      this.props.changeIndex(0);
    }
    if (
      this.props.gallery.length > 1 &&
      this.state.index < this.props.gallery.length - 1
    ) {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
      });
      this.props.changeIndex(this.state.index + 1);
    }
  };

  prev = () => {
    if (this.props.gallery.length && this.state.index === 0) {
      this.setState({
        ...this.state,
        index: this.props.gallery.length - 1,
      });
      this.props.changeIndex(this.props.gallery.length - 1);
    }
    if (this.props.gallery.length > 1 && this.state.index > 0) {
      this.setState({
        ...this.state,
        index: this.state.index - 1,
      });
      this.props.changeIndex(this.state.index - 1);
    }
  };

  render() {
    return (
      <div className={styles.pagination}>
        <div className={styles.vector} onClick={this.prev}>
          <img src="/assets/img/vector_left.png" alt="left" />
        </div>

        <div className={styles.vector} onClick={this.next}>
          <img src="/assets/img/vector_right.png" alt="right" />
        </div>
      </div>
    );
  }
}
