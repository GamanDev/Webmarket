import React, { Component } from "react";
import Attribute from "./Attribute";
import Price from "./Price";
import Title from "./Title";
import Counter from "./Counter";
import Image from "./Image";
import styles from "./Item.module.css";

export default class Item extends Component {
  render() {
    const { currencyIndex, options, amount, key_unique, className } =
      this.props;
    const { brand, name, gallery, prices, attributes } = this.props.item;

    if (!this.props.item) return null;

    const cart_description = `cart_description_${className}`;
    const cart_item = `cart_item_${className}`;
    return (
      <div className={styles[cart_item]}>
        <section className={styles[cart_description]}>
          <Title brand={brand} name={name} stl={className} />
          <Price
            prices={prices}
            currencyIndex={currencyIndex}
            stl={className}
          />
          <Attribute
            attributes={attributes}
            options={options}
            stl={className}
          />
        </section>
        <section className={styles.count_image}>
          <Counter amount={amount} key_unique={key_unique} stl={className} />
          <Image gallery={gallery} stl={className} />
        </section>
      </div>
    );
  }
}
