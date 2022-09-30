import React, { Component } from "react";
import cx from "classnames";
import styles from "./Attribute.module.css";

export default class Options extends Component {
  render() {
    const { stl, name, items, setAttributes, setActiveAttribute, options } =
      this.props;

    const attribute_NameCSS = `attribute_name_${stl}`;
    const attribute_optionsCSS = `attribute_options_${stl}`;
    const options_valueCSS = `options_value_${stl}`;
    const active = `active_${stl}`;

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
            if (item.value === options) {
              return (
                <div
                  key={item.id}
                  onClick={(e) =>
                    setAttributes &&
                    (setAttributes(name, item.value),
                    setActiveAttribute(e, "active"))
                  }
                  className={cx(
                    styles.options_value,
                    stl && (styles[options_valueCSS], styles[active])
                  )}
                >
                  {item.value}
                </div>
              );
            }
            return (
              <div
                key={item.id}
                onClick={(e) =>
                  setAttributes &&
                  (setAttributes(name, item.value),
                  setActiveAttribute(e, "active"))
                }
                className={cx(
                  styles.options_value,
                  stl && styles[options_valueCSS]
                )}
              >
                {item.value}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
