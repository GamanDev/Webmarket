import React, { Component } from "react";
import cx from "classnames";
import styles from "./Selects.module.css";

export default class Selects extends Component {
  render() {
    const {
      attribute,
      classSwatch,
      classText,
      selected,
      onSelected,
      attributeIndex,
    } = this.props;
    const { items, type } = attribute;

    return (
      <div className={styles.selects}>
        {items.map((item) => (
          <div key={item.id} className={styles.select}>
            {type === "swatch" ? (
              <button
                style={{
                  background: item.value,
                }}
                onClick={() => onSelected(attributeIndex, item.value)}
                className={cx(
                  styles.swatch,
                  classSwatch,
                  selected[this.props.attributeIndex] === item.value &&
                    styles.swatch_active
                )}
              ></button>
            ) : (
              <button
                className={cx(
                  styles.text,
                  classText,
                  selected[this.props.attributeIndex] === item.value &&
                    styles.text_active
                )}
                onClick={() => onSelected(attributeIndex, item.value)}
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
