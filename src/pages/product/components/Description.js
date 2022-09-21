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
              {/*  */}

              {attribute.items.map((item) => (
                <label key={item.value}>
                  <input type="radio" name={attribute.name} />
                  {attribute.name === "Color" ? (
                    <div
                      key={item.id}
                      className={styles.check_color}
                      style={{
                        background: `${item.value}`,
                      }}
                      onClick={() => console.log(item.displayValue)}
                    ></div>
                  ) : (
                    <div
                      key={item.id}
                      className={styles.select}
                      onClick={() => console.log(item.value)}
                    >
                      {item.value}
                    </div>
                  )}
                </label>
              ))}
              {/*  */}
            </div>
          </div>
        ))}
        <h4>{this.props.product.prices[0].__typename.toUpperCase()}:</h4>
        <div className={styles.prices}>
          <div>{prices[0].currency.symbol}</div>
          <div>{prices[0].amount}</div>
        </div>
        <button>ADD TO CART</button>
        <article dangerouslySetInnerHTML={{ __html: description }}></article>
      </form>
    );
  }
}
