import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./Bigcartitem.module.css";

import { v4 as uuidv4 } from "uuid";
import {
  createItemObjAction,
  deleteItemObjAction,
} from "../../../../../redux/ActionCreators/Actions";

import BigCartItemImage from "./BigCartItemImage";
import ItemBox from "./ItemBox";

class BigCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { id: [] };
    this.createItemObj = this.props.createItemObj;
    this.deleteItemObj = this.props.deleteItemObj;
  }

  componentDidMount() {
    this.setState({ id: this.props.id });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.state.id) {
      this.setState({ id: prevProps.id });
    }
  }

  render() {
    const addItemObjCart = (obj) => {
      const itemObj = {
        name: obj.name,
        price: obj.prices,
        count: 1,
      };
      this.createItemObj(itemObj);
      this.forceUpdate();
    };
    const deleteItemObjCart = (obj) => {
      const itemObj = {
        name: obj.name,
        price: obj.prices,
        count: 1,
      };
      this.deleteItemObj(itemObj);
      this.forceUpdate();
    };
    return (
      <div>
        {this.state.id.map((id) => (
          <div key={uuidv4()}>
            {id.count ? (
              <div className={styles.big_cart_item}>
                <ItemBox
                  item={id.name}
                  client={this.props.client}
                  currency={this.props.currency}
                />
                <div className={styles.big_cart_buttons}>
                  <button
                    onClick={() => addItemObjCart(id)}
                    className={styles.count__button}
                  >
                    +
                  </button>
                  <div>{id.count}</div>
                  <button
                    onClick={() => deleteItemObjCart(id)}
                    className={styles.count__button}
                  >
                    -
                  </button>
                </div>
                <BigCartItemImage item={id.name} client={this.props.client} />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.cartReducer.ItemsInCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItemObj: (obj) => dispatch(createItemObjAction(obj)),
    deleteItemObj: (obj) => dispatch(deleteItemObjAction(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BigCartItem);
