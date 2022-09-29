import React, { Component } from "react";
import cx from "classnames";
import styles from "./Attribute.module.css";

export default class Attribute extends Component {
  render() {
    const { attributes, setAttributes, options, stl } = this.props;

    const attribute_NameCSS = `attribute_name_${stl}`;
    const attribute_optionsCSS = `attribute_options_${stl}`;
    const options_valueCSS = `options_value_${stl}`;
    const color_boxCSS = `color_box_${stl}`;
    console.log(options);
    return (
      <div>
        {attributes.map((attribute) => (
          <div key={attribute.id}>
            {attribute.name === "Color" ? (
              <>
                <h3
                  className={cx(
                    stl ? styles[attribute_NameCSS] : styles.attribute_name
                  )}
                >
                  {attribute.name}
                </h3>
                <div
                  className={cx(
                    stl ? styles[attribute_optionsCSS] : styles.options
                  )}
                >
                  {attribute.items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        background: `${item.value}`,
                      }}
                      className={cx(
                        stl ? styles[color_boxCSS] : styles.color_box
                      )}
                      onClick={() =>
                        setAttributes &&
                        setAttributes(attribute.name, item.value)
                      }
                    ></div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3
                  className={cx(
                    stl ? styles[attribute_NameCSS] : styles.attribute_name
                  )}
                >
                  {attribute.name}
                </h3>
                <div
                  className={cx(
                    stl ? styles[attribute_optionsCSS] : styles.options
                  )}
                >
                  {attribute.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setAttributes &&
                        setAttributes(attribute.name, item.value)
                      }
                      className={cx(
                        stl ? styles[options_valueCSS] : styles.options_value
                      )}
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}
