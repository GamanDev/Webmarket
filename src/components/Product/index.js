import React, { Component } from "react";
import Attributes from "./Attributes";
import Counter from "./Counter";
import Image from "./Image";
import Price from "./Price";
import Title from "./Title";
import styles from "./index.module.css";

export default class Item extends Component {
  render() {
    const { ItemsInCart, currencyIndex, product } = this.props;

    if (!ItemsInCart) return null;

    const item = ItemsInCart[product];

    return (
      <div className={styles.product}>
        <section className={styles.details}>
          <Title
            brand={item.item.brand}
            name={item.item.name}
            className={styles.title_mini}
            classBrand={styles.title_mini}
          />
          <Price
            prices={item.item.prices}
            currencyIndex={currencyIndex}
            className={styles.prices_mini}
          />
          <Attributes
            attributes={item.item.attributes}
            classText={styles.text_mini}
            classSwatch={styles.swatch_mini}
            selected={item.selected}
            className={styles.header}
          />
        </section>
        <section className={styles.counter}>
          <Counter
            amount={item.amount}
            className={styles.counter_mini}
            itemKey={product}
          />
        </section>
        <section>
          <Image
            gallery={item.item.gallery[0]}
            className={styles.gallery_mini}
          />
        </section>
      </div>
    );
  }
}
