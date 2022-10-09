import React, { Component } from "react";
import cx from "classnames";
import styles from "./Select.module.css";

export default class Select extends Component {
  state = { select: "" };
  render() {
    const { attribute, classSwatch, classText } = this.props;
    const { items, type } = attribute;

    return (
      <div className={styles.select}>
        {items.map((item) => (
          <div key={item.id}>
            {type === "swatch" ? (
              <button
                style={{
                  background: item.value,
                }}
                value={item.value}
                onClick={(e) =>
                  this.setState({ select: e.currentTarget.value })
                }
                className={cx(
                  styles.swatch,
                  classSwatch,
                  this.state.select === item.value && styles.swatch_active
                )}
              ></button>
            ) : (
              <button
                className={cx(
                  styles.text,
                  classText,
                  this.state.select === item.value && styles.text_active
                )}
                value={item.value}
                onClick={(e) =>
                  this.setState({ select: e.currentTarget.value })
                }
              >
                {item.value}
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}
