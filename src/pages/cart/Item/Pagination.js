import React, { Component } from "react";
import styles from "./Pagination.module.css";

export default class Pagination extends Component {
  state = { index: 0 };

  next = () => {
    let index = this.state.index;
    index++;
    this.setState({ index: index % this.props.gallery.length });
    this.props.changeIndex(index % this.props.gallery.length);
  };

  prev = () => {
    if (this.state.index < 1) {
      this.setState({ index: this.props.gallery.length - 1 });
      this.props.changeIndex(this.props.gallery.length - 1);
    } else {
      let index = this.state.index;
      index--;
      this.setState({ index: index % this.props.gallery.length });
      this.props.changeIndex(index % this.props.gallery.length);
    }
  };

  render() {
    return (
      <div className={styles.pagination}>
        <div className={styles.vector} onClick={this.prev}>
          <img src="/assets/img/vector_left.svg" alt="left" />
        </div>

        <div className={styles.vector} onClick={this.next}>
          <img src="/assets/img/vector_right.svg" alt="right" />
        </div>
      </div>
    );
  }
}
