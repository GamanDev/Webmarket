import React, { Component } from "react";
import styles from "./Pagination.module.css";

export default class Pagination extends Component {
  state = { index: 0 };

  next = () => {
    let index = this.state.index;
    let gallery = this.props.gallery;

    index++;
    this.setState({ index: index % gallery.length });
    this.props.changeIndex(index % gallery.length);
  };

  prev = () => {
    let gallery = this.props.gallery;

    if (this.state.index < 1) {
      this.setState({ index: gallery.length - 1 });
      this.props.changeIndex(gallery.length - 1);
    } else {
      let index = this.state.index;
      index--;
      this.setState({ index: index % gallery.length });
      this.props.changeIndex(index % gallery.length);
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
