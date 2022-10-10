import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "../../Product";
import Price from "../../Product/Price";
import Total from "../../Product/Total";
import Title from "../../Product/Title";
import styles from "./Cart.module.css";
import Attributes from "../../Product/Attributes";
import Counter from "../../Product/Counter";
import Image from "../../Product/Image";

export default class Cart extends Component {
  render() {
    const { toggleCart, currencyIndex, ItemsInCart } = this.props;
    console.log("ItemsInCart", ItemsInCart);

    return (
      <div className={styles.modal} onClick={toggleCart}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          {Object.keys(ItemsInCart).map((product) => (
            <div key={ItemsInCart[product].item.id} className={styles.product}>
              <section className={styles.details}>
                <Title
                  brand={ItemsInCart[product].item.brand}
                  name={ItemsInCart[product].item.name}
                  className={styles.title_mini}
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
                />
              </section>
              <section>
                <Counter
                  amount={ItemsInCart[product].amount}
                  className={styles.counter_mini}
                />
              </section>
              <section>
                <Image
                  gallery={ItemsInCart[product].item.gallery[0]}
                  className={styles.gallery_mini}
                />
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
