import React, { Component } from "react";
import cx from "classnames";
import styles from "./Select.module.css";

export default class Select extends Component {
  render() {
    const { attribute, classSwatch, classText } = this.props;
    const { items, type } = attribute;
    console.log("select", attribute);
    return (
      <div className={styles.select}>
        {items.map((item) => (
          <div key={item.id}>
            {type === "swatch" ? (
              <div
                style={{
                  background: item.value,
                }}
                className={cx(styles.swatch, classSwatch)}
              ></div>
            ) : (
              <div className={cx(styles.text, classText)}>{item.value}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
