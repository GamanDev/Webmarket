import React, { Component } from "react";
import styles from "./Description.module.css";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    const { brand, name, description, prices, attributes } = this.props.product;

    if (!this.props.product) return null;

    return (
      <form>
        <h2>{brand}</h2>
        <h3>{name}</h3>

        {attributes.map((attribute) => (
          <div key={attribute.id}>
            <h4>{attribute.name.toUpperCase()}</h4>
            <div className={styles.variants}>
              {attribute.name === "Color"
                ? attribute.items.map((item) => (
                    <div
                      key={item.id}
                      className={styles.check_color}
                      style={{
                        background: `${item.value}`,
                      }}
                    ></div>
                  ))
                : attribute.items.map((item) => (
                    <div key={item.id} className={styles.select}>
                      {item.value}
                    </div>
                  ))}
            </div>
          </div>
        ))}
        <h4>PRICE:</h4>
        <div className={styles.prices}>
          <div>{prices[0].currency.symbol}</div>
          <div>{prices[0].amount}</div>
        </div>
        <article dangerouslySetInnerHTML={{ __html: description }}></article>
      </form>
    );
  }
}
