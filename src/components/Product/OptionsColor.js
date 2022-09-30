import React, { Component } from "react";
import cx from "classnames";
import styles from "./Attribute.module.css";

export default class OptionsColor extends Component {
  render() {
    const { stl, name, items, setAttributes, setActiveAttribute, options } =
      this.props;

    const attribute_NameCSS = `attribute_name_${stl}`;
    const color_boxCSS = `color_box_${stl}`;
    const attribute_optionsCSS = `attribute_options_${stl}`;
    const active_color = `active_color_${stl}`;
    return (
      <>
        <h3
          className={cx(
            styles.attribute_name,
            stl && styles[attribute_NameCSS]
          )}
        >
          {name}
        </h3>
        <div
          className={cx(styles.options, stl && styles[attribute_optionsCSS])}
        >
          {items.map((item) => {
            if (options && item.value === options.Color) {
              return (
                <div
                  key={item.id}
                  style={{
                    background: `${item.value}`,
                  }}
                  className={cx(
                    styles.color_box,
                    stl && (styles[color_boxCSS], styles[active_color])
                  )}
                  onClick={(e) =>
                    setAttributes &&
                    (setAttributes(name, item.value),
                    setActiveAttribute(e, "active_color"))
                  }
                ></div>
              );
            }
            return (
              <div
                key={item.id}
                style={{
                  background: `${item.value}`,
                }}
                className={cx(styles.color_box, stl && styles[color_boxCSS])}
                onClick={(e) =>
                  setAttributes &&
                  (setAttributes(name, item.value),
                  setActiveAttribute(e, "active_color"))
                }
              ></div>
            );
          })}
        </div>
      </>
    );
  }
}
