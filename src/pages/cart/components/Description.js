import React, { Component } from "react";
import styles from "./Description.module.css";

// With USB 3 ports
// Touch ID in keyboard
// Capacity
// Size

export default class Description extends Component {
  render() {
    console.log("item", this.props.item);
    console.log("descr", this.props.product);
    const { brand, name, prices, attributes } = this.props.product;
    const { item: product } = this.props;
    console.log("attr I", attributes);

    return (
      <main className={styles.cart__description}>
        <h4>{brand}</h4>
        <h4>{name}</h4>
        <div>Price: $50.00</div>
        <div>
          {attributes.map((attribute) => (
            <div key={attribute.id}>
              <h4>{attribute.name}</h4>
              <div className={styles.variants}>
                {/* {attribute.items.map((item) => )} */}
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
