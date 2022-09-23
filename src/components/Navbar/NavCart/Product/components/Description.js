import React, { Component } from "react";
import styles from "./Description.module.css";

export default class Description extends Component {
  render() {
    console.log("item", this.props.item);
    console.log("descr", this.props.product);
    const { brand, name, prices, attributes } = this.props.product;
    return (
      <main>
        <h4>{brand}</h4>
        <h4>{name}</h4>
        <div>Price: $50.00</div>
        <div>
          {attributes.map((attribute) => (
            <div key={attribute.id}>
              <h4>{attribute.name}</h4>
              <div className={styles.variants}>
                {/*  */}

                {attribute.items.map((item) => (
                  <label key={item.value} name={attribute.name}>
                    <input type="radio" name={attribute.name} defaultChecked />
                    {attribute.name === "Color" ? (
                      <div
                        key={item.id}
                        className={styles.check_color}
                        style={{
                          background: `${item.value}`,
                        }}
                      ></div>
                    ) : (
                      <div key={item.id} className={styles.select}>
                        {item.value}
                      </div>
                    )}
                  </label>
                ))}
                {/*  */}
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
