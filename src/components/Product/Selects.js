import React, { Component } from "react";
import cx from "classnames";
import styles from "./Select.module.css";

// DOM manipulation  - do not use (in REACT) ||  || innerHTML ... so on || data.attributes

// Attributes
// Selects

export default class Selects extends Component {
  state = { selected: null, isSelected: false };

  select = (item) => {
    this.setState({ selected: item });
    if (this.props.selectionsRef) {
      this.props.selectionsRef.current[this.props.attributeIndex] = item.value;
    }
  };
  render() {
    const { attribute, classSwatch, classText, selected } = this.props;
    //selectionsRef => []
    console.log("selected", selected);
    console.log("index", this.props.attributeIndex);
    const { items, type } = attribute;
    // select || selector ...
    // fn => (two way data biding) || read about
    return (
      <div className={styles.select}>
        {/* styles.selects */}
        {/* Attribute */}
        {items.map((item) => (
          <div key={item.id}>
            {/* select js */}
            {type === "swatch" ? (
              <button
                style={{
                  background: item.value,
                }}
                onClick={() => this.select(item)}
                // function
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
                // function
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
