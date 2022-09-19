import React, { Component } from "react";
import Card from "./Card/Card";
import styles from "./Main.module.css";

export default class Main extends Component {
  render() {
    const testProps = [
      {
        url: "http://unsplash.it/355/338",
        name: "Alpha",
        Price: "30.00",
        inStock: true,
      },
      {
        url: "http://unsplash.it/356/338",
        name: "Beta",
        Price: "42.00",
        inStock: true,
      },
      {
        url: "http://unsplash.it/357/338",
        name: "Charlie",
        Price: "13.00",
        inStock: false,
      },
    ];
    return (
      <div>
        <h2>Category name</h2>
        <div className={styles.products}>
          {testProps.map((card) => (
            <Card
              key={card.name}
              url={card.url}
              name={card.name}
              price={card.Price}
              inStock={card.inStock}
            />
          ))}
        </div>
      </div>
    );
  }
}
