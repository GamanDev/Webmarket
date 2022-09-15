import React, { Component } from "react";
import styles from "../ProductById.module.css";

export default class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.attribute = this.props.attribute;
  }
  render() {
    return (
      <div>
        <div className={styles.attribute__name}>
          {this.attribute.name.toUpperCase()}
        </div>
        <div className={styles.product__form}>
          {this.attribute.items.map((item) => (
            <label key={item.value}>
              <input type="radio" name={this.attribute.name} />
              {this.attribute.name === "Color" ? (
                <div
                  className={styles.boxes__color}
                  style={{ background: `${item.value}` }}
                ></div>
              ) : (
                <div className={styles.boxes}>{item.value}</div>
              )}
            </label>
          ))}
        </div>
      </div>
    );
  }
}
