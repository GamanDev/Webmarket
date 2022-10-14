import React, { Component } from "react";
import Price from "./Price";
import Title from "./Title";
import Counter from "./Counter";
import Image from "./Image";
import Attributes from "./Attributes";
import styles from "./index.module.css";

export default class Item extends Component {
  render() {
    const { ItemsInCart, currencyIndex, product } = this.props;
    console.log("ItemsInCart", ItemsInCart);
    if (!ItemsInCart) return null;
    return (
      <div className={styles.product}>
        <section className={styles.details}>
          <Title
            brand={ItemsInCart[product].item.brand}
            name={ItemsInCart[product].item.name}
            className={styles.title_mini}
            classBrand={styles.title_mini}
          />
          <Price
            prices={ItemsInCart[product].item.prices}
            currencyIndex={currencyIndex}
            className={styles.prices_mini}
          />
          <Attributes
            attributes={ItemsInCart[product].item.attributes}
            classText={styles.text_mini}
            classSwatch={styles.swatch_mini}
            selected={ItemsInCart[product].selected}
            className={styles.header}
          />
        </section>
        <section className={styles.counter}>
          <Counter
            amount={ItemsInCart[product].amount}
            className={styles.counter_mini}
            itemKey={product}
          />
        </section>
        <section>
          <Image
            gallery={ItemsInCart[product].item.gallery[0]}
            className={styles.gallery_mini}
          />
        </section>
      </div>
    );
  }
}
