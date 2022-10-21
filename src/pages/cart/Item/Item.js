import React, { Component } from "react";
import Attributes from "../../../components/Product/Attributes";
import Counter from "../../../components/Product/Counter";
import Image from "../../../components/Product/Image";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import styles from "./Item.module.css";

export default class Item extends Component {
  render() {
    const { ItemsInCart, currencyIndex, product } = this.props;

    return (
      <div className={styles.product}>
        <section className={styles.details}>
          <Title
            brand={ItemsInCart[product].item.brand}
            name={ItemsInCart[product].item.name}
            className={styles.title_cart}
            classBrand={styles.title_cart}
          />
          <Price
            prices={ItemsInCart[product].item.prices}
            currencyIndex={currencyIndex}
            className={styles.prices_cart}
          />
          <Attributes
            attributes={ItemsInCart[product].item.attributes}
            classText={styles.text_cart}
            classSwatch={styles.swatch_cart}
            selected={ItemsInCart[product].selected}
            className={styles.header}
          />
        </section>
        <section className={styles.counter}>
          <Counter
            amount={ItemsInCart[product].amount}
            className={styles.counter_cart}
            itemKey={product}
            classAmount={styles.amount}
          />
        </section>
        <section>
          <Image
            gallery={ItemsInCart[product].item.gallery}
            className={styles.gallery_cart}
          />
        </section>
      </div>
    );
  }
}
