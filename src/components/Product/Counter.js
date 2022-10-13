import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementItem, incrementItem } from "../../redux/actions";
import styles from "./Counter.module.css";

class Counter extends Component {
  render() {
    const {
      amount,
      incrementItem,
      decrementItem,
      className,
      itemKey,
      classAmount,
    } = this.props;

    return (
      <div className={styles.counter}>
        <button className={className} onClick={() => incrementItem(itemKey)}>
          +
        </button>
        <span className={classAmount}>{amount}</span>
        <button className={className} onClick={() => decrementItem(itemKey)}>
          -
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementItem: (key) => dispatch(incrementItem(key)),
    decrementItem: (key) => dispatch(decrementItem(key)),
  };
}

export default connect(null, mapDispatchToProps)(Counter);
