import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainCartLogo from "../MainCartLogo";

export default class MainHigh extends Component {
  render() {
    return (
      <>
        {this.props.products &&
          this.props.products
            .map((product) => product)
            .sort((a, b) => {
              if (
                a.prices[this.props.curr].amount >
                b.prices[this.props.curr].amount
              ) {
                return -1;
              }
              return 1;
            })
            .map((product) => (
              <div key={product.id}>
                {product.inStock ? (
                  <div className="card">
                    <MainCartLogo id={product.id} product={product} />
                    <Link to={`/${product.id}`}>
                      <img
                        src={product.gallery[0]}
                        alt={product.name}
                        className="card__image"
                      />

                      <div className="prev">
                        <div className="name">{product.name}</div>
                        <div className="price">
                          {product.prices[this.props.curr].currency.symbol}
                          {product.prices[this.props.curr].amount}
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="card">
                    <Link to={`/${product.id}`}>
                      <img
                        src={product.gallery[0]}
                        alt={product.name}
                        className="card__image_outOfStock"
                      />
                      <div className="card_outOfStock">OUT OF STOCK</div>
                      <div className="prev_outOfStock">
                        <div className="name">{product.name}</div>
                        <div className="price">
                          {product.prices[this.props.curr].currency.symbol}
                          {product.prices[this.props.curr].amount}
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
      </>
    );
  }
}
