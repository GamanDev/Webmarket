import React, { Component } from "react";
import cx from "classnames";
import styles from "./Selects.module.css";

// DOM manipulation  - do not use (in REACT) ||  || innerHTML ... so on || data.attributes

// fn => (two way data biding) || read about

export default class Selects extends Component {
  state = { selected: null };

  select = (item) => {
    this.setState({ selected: item });
    if (this.props.selectionsRef) {
      this.props.selectionsRef.current[this.props.attributeIndex] = item.value;
    }
  };

  render() {
    const { attribute, classSwatch, classText, selected } = this.props;
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
                onClick={() => this.select(item)}
                className={cx(
                  styles.swatch,
                  classSwatch,
                  this.props.selectionsRef &&
                    this.state.selected === item &&
                    styles.swatch_active,
                  selected &&
                    selected[this.props.attributeIndex] === item.value &&
                    styles.swatch_active
                )}
              ></button>
            ) : (
              <button
                className={cx(
                  styles.text,
                  classText,
                  this.props.selectionsRef &&
                    this.state.selected === item &&
                    styles.text_active,
                  selected &&
                    selected[this.props.attributeIndex] === item.value &&
                    styles.text_active
                )}
                onClick={() => this.select(item)}
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
