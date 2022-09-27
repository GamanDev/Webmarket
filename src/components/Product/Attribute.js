import React, { Component } from "react";
import styles from "./Attribute.module.css";

export default class Attribute extends Component {
  render() {
    const { attributes } = this.props;
    return (
      <div>
        {attributes.map((attribute) => (
          <div key={attribute.id}>
            {attribute.name === "Color" ? (
              <>
                <h3 className={styles.attribute_name}>{attribute.name}</h3>
                <div className={styles.options}>
                  {attribute.items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        background: `${item.value}`,
                      }}
                      className={styles.color_box}
                      onClick={() => console.log(attribute.name, item.value)}
                    ></div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className={styles.attribute_name}>{attribute.name}</h3>
                <div className={styles.options}>
                  {attribute.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => console.log(attribute.name, item.value)}
                      className={styles.options_value}
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
