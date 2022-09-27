import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from "../../../components/Product/Attribute";
import Price from "../../../components/Product/Price";
import Title from "../../../components/Product/Title";
import { addItemToCart } from "../../../redux/actions";
import styles from "./Description.module.css";

class Description extends Component {
  submitForm = (e) => {
    e.preventDefault();

    let key_unique = "";
    const product = {};

    for (const item in this.state) {
      key_unique += `${item}-${this.state[item]}`;
      product[item] = this.state[item];
    }

    product.key_unique = key_unique;
    product.count = 1;

    this.props.addItem(product);
  };

  render() {
    const { currency, product } = this.props;
    const { brand, name, description, prices, attributes, inStock, id } =
      product;

    if (!this.props.product) return null;

    return (
      <form className={styles.description} onSubmit={this.submitForm}>
        {/*  */}
        <h2 className={styles.brand}>{brand}</h2>
        <h3 className={styles.name}>{name}</h3>
        {/*  */}
        {/*  */}
        {attributes.map((attribute) => (
          <div key={attribute.id}>
            <h4 className={styles.attribute__name}>
              {attribute.name.toUpperCase()}
            </h4>
            <div className={styles.variants}>
              {attribute.items.map((item) => (
                <label key={item.value} name={attribute.name}>
                  <input type="radio" name={attribute.name} required />
                  {attribute.name === "Color" ? (
                    <div
                      key={item.id}
                      className={styles.check_color}
                      style={{
                        background: `${item.value}`,
                      }}
                      onClick={() =>
                        this.setState({
                          ...this.state,
                          [attribute.name]: item.value,
                        })
                      }
                    ></div>
                  ) : (
                    <div
                      key={item.id}
                      className={styles.select}
                      onClick={() =>
                        this.setState({
                          ...this.state,
                          [attribute.name]: item.value,
                          id,
                        })
                      }
                    >
                      {item.value}
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}
        {/*  */}
        {/*  */}
        <h4 className={styles.price}>PRICE:</h4>
        <div className={styles.prices}>
          <div>{prices[currency].currency.symbol}</div>
          <div>{prices[currency].amount}</div>
        </div>
        {/*  */}
        <button
          className={styles.button_addToCart}
          disabled={!inStock}
          // onClick={() =>
          //   this.setState({
          //     ...this.state,
          //     id,
          //     prices,
          //   })
          // }
          onClick={() => console.log(product)}
        >
          ADD TO CART
        </button>

        <article
          className={styles.description__article}
          dangerouslySetInnerHTML={{ __html: description }}
        ></article>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItemToCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
