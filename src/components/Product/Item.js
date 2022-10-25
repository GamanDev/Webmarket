import React, { Component } from "react";
import cx from "classnames";
import Attributes from "./Attributes";
import Counter from "./Counter";
import Image from "./Image";
import Price from "./Price";
import Title from "./Title";
import styles from "./Item.module.css";

export default class Item extends Component {
  render() {
    const { ItemsInCart, currencyIndex, classNames, pagination } = this.props;
    const { title, price, text, swatch, counter, image, border } = classNames;
    const { selected, amount, key } = ItemsInCart;
    const { brand, name, prices, attributes, gallery } = ItemsInCart.item;

    if (!ItemsInCart) return null;

    return (
      <div className={cx(styles.product, border)}>
        <section className={styles.details}>
          <Title
            brand={brand}
            name={name}
            className={title}
            classBrand={title}
          />
          <Price
            prices={prices}
            currencyIndex={currencyIndex}
            className={price}
          />
          <Attributes
            attributes={attributes}
            classText={text}
            classSwatch={swatch}
            selected={selected}
            className={styles.header}
          />
        </section>
        <section className={styles.counter}>
          <Counter amount={amount} className={counter} itemKey={key} />
        </section>
        <section>
          <Image gallery={gallery} className={image} pagination={pagination} />
        </section>
      </div>
    );
  }
}
