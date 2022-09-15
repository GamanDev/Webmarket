import React, { Component } from "react";
import { connect } from "react-redux";
import {
  boxCapacity,
  boxColor,
  boxSize,
  boxTouchID,
  boxUSB,
} from "../../../../../redux/ActionCreators/Actions";
import { dataFetching } from "../../../../../utils/dataFetching";
import { productById } from "../../../../../utils/gql/productById";
import CartCheckBoxes from "../../../../ProductById/ProductCheckBoxes.js/CartCheckBoxes";
import styles from "./Item.module.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", product: [], curr: 0, test: "" };
    this.USB_DISPATCH = this.props.USB_DISPATCH;
    this.TOUCH_ID_DISPATCH = this.props.TOUCH_ID_DISPATCH;
    this.SIZE_DISPATCH = this.props.SIZE_DISPATCH;
    this.CAPACITY_DISPATCH = this.props.CAPACITY_DISPATCH;
    this.COLOR_DISPATCH = this.props.COLOR_DISPATCH;
  }

  componentDidMount() {
    this.setState({ ...this.state, id: this.props.item });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== prevState.id) {
      dataFetching(this.props, productById(this.state.id)).then((result) =>
        this.setState({
          ...this.state,
          product: result.data.product,
        })
      );
    }
    if (prevProps.currency !== this.state.curr) {
      this.setState({ curr: this.props.currency });
    }
  }
  render() {
    const valueSetter = (val) => {
      this.setState({ ...this.state, test: val });
    };
    const formDispatcher = (attribute) => {
      if (attribute.name === "With USB 3 ports") {
        this.USB_DISPATCH({ name: attribute.name, value: this.state.test });
      }
      if (attribute.name === "Size") {
        this.SIZE_DISPATCH({ name: attribute.name, value: this.state.test });
      }
      if (attribute.name === "Capacity") {
        this.CAPACITY_DISPATCH({
          name: attribute.name,
          value: this.state.test,
          id: this.state.id,
        });
      }
      if (attribute.name === "Touch ID in keyboard") {
        this.TOUCH_ID_DISPATCH({
          name: attribute.name,
          value: this.state.test,
        });
      }
      if (attribute.name === "Color") {
        this.COLOR_DISPATCH({
          name: attribute.name,
          value: this.state.test,
        });
      }
    };

    return (
      <form className={styles.product__details}>
        <div className={styles.product__details_form}>
          <div className={styles.product__brand_name}>
            {this.state.product.brand}
          </div>
          <div className={styles.product__name}>{this.state.product.name}</div>
          <div>
            {this.state.product.prices && (
              <div>
                <div className={styles.product__price}>
                  {this.state.product.prices[this.state.curr].currency.symbol}{" "}
                  {""}
                  {this.state.product.prices[this.state.curr].amount}
                </div>
              </div>
            )}
          </div>
          <div>
            {this.state.product.attributes &&
              this.state.product.attributes.map((attribute) => (
                <div
                  key={attribute.id}
                  onClick={() => formDispatcher(attribute)}
                >
                  <CartCheckBoxes
                    attribute={attribute}
                    valueSetter={valueSetter}
                    id={this.state.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    USB_DISPATCH: (obj) => dispatch(boxUSB(obj)),
    TOUCH_ID_DISPATCH: (obj) => dispatch(boxTouchID(obj)),
    SIZE_DISPATCH: (obj) => dispatch(boxSize(obj)),
    CAPACITY_DISPATCH: (obj) => dispatch(boxCapacity(obj)),
    COLOR_DISPATCH: (obj) => dispatch(boxColor(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
