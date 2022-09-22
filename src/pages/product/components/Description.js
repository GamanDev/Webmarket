import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Description.module.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { brand, name, description, prices, attributes, inStock } =
      this.props.product;

    const { currency } = this.props;

    if (!this.props.product) return null;

    return (
      <form className={styles.description} onSubmit={this.submitForm}>
        <h2>{brand}</h2>
        <h3>{name}</h3>

        {attributes.map((attribute) => (
          <div key={attribute.id}>
            <h4>{attribute.name.toUpperCase()}</h4>
            <div className={styles.variants}>
              {/*  */}

              {attribute.items.map((item) => (
                <label key={item.value} name={attribute.name}>
                  <input type="radio" name={attribute.name} />
                  {attribute.name === "Color" ? (
                    <div
                      key={item.id}
                      className={styles.check_color}
                      value={this.state[attribute.name]}
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
                          name,
                        })
                      }
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
          <div>{prices[currency].currency.symbol}</div>
          <div>{prices[currency].amount}</div>
        </div>

        <button disabled={!inStock}>ADD TO CART</button>

        <article dangerouslySetInnerHTML={{ __html: description }}></article>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(Description);
