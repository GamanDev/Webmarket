import React, { Component } from "react";
import { dataFetching } from "../../utils/dataFetching";
import { productById } from "../../utils/gql/productById";
import styles from "./ProductById.module.css";

import withRouter from "../HOC/MainHOC";
import CheckBoxes from "./ProductCheckBoxes.js/CheckBoxes";
import { connect } from "react-redux";
import { createItemObjAction } from "../../redux/ActionCreators/Actions";

class ProductById extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", product: [], isMounted: true, index: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createItemObj = this.props.createItemObj;
  }

  componentDidMount() {
    let id = this.props.params.product_id;
    this.setState({ ...this.state, id });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id)
      if (this.state.isMounted) {
        if (this.state.id) {
          dataFetching(this.props, productById(this.state.id)).then((result) =>
            this.setState({
              ...this.state,
              product: result.data.product,
            })
          );
        }
      }
    if (prevState.curr !== this.props.currency) {
      this.setState({ curr: this.props.currency });
    }
  }

  componentWillUnmount() {
    return this.setState({ isMounted: false, product: [] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemObj = {
      name: this.state.product.id,
      price: this.state.product.prices,
      count: 1,
    };
    this.createItemObj(itemObj);
  }
  render() {
    const plain = document.querySelector(".plainText");
    if (this.state.product.description) {
      plain.innerHTML = this.state.product.description;
    }

    return (
      <>
        <div className={styles.product__container}>
          <div className={styles.product__miniPhotos}>
            {this.state.product.gallery &&
              this.state.product.gallery.map((photo, i) => (
                <img
                  key={photo}
                  src={photo}
                  alt={`boots ${i}`}
                  className={styles.miniPhoto}
                  onClick={() => this.setState({ index: i })}
                />
              ))}
          </div>
          {this.state.product.gallery && (
            <img
              src={this.state.product.gallery[this.state.index]}
              alt=""
              className={styles.product__main_image}
            />
          )}
          {this.state.product && (
            <form
              className={styles.product__details}
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div>
                <div className={styles.product__brand_name}>
                  {this.state.product.brand}
                </div>
                <div className={styles.product__name}>
                  {this.state.product.name}
                </div>
                <div>
                  {this.state.product.attributes &&
                    this.state.product.attributes.map((attribute) => (
                      <div key={attribute.id}>
                        {attribute.name === "Size" ? (
                          <CheckBoxes attribute={attribute} />
                        ) : attribute.name === "Color" ? (
                          <CheckBoxes attribute={attribute} />
                        ) : attribute.name === "Capacity" ? (
                          <CheckBoxes attribute={attribute} />
                        ) : attribute.name === "With USB 3 ports" ? (
                          <CheckBoxes attribute={attribute} />
                        ) : attribute.name === "Touch ID in keyboard" ? (
                          <CheckBoxes attribute={attribute} />
                        ) : (
                          <CheckBoxes attribute={attribute} />
                        )}
                      </div>
                    ))}
                </div>
                <div>
                  {this.state.product.prices && (
                    <div>
                      <div className={styles.attribute__name}>
                        {this.state.product.prices[0].__typename.toUpperCase()}
                      </div>
                      <div className={styles.product__price}>
                        {
                          this.state.product.prices[this.state.curr].currency
                            .symbol
                        }{" "}
                        {""}
                        {this.state.product.prices[this.state.curr].amount}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {this.state.product.inStock ? (
                <button className={styles.addToCart}>ADD TO CART</button>
              ) : (
                <button disabled className={styles.disabled}>
                  ADD TO CART
                </button>
              )}
              <div className={`plainText ${styles.plainText}`}></div>
            </form>
          )}
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createItemObj: (obj) => dispatch(createItemObjAction(obj)),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(ProductById));
