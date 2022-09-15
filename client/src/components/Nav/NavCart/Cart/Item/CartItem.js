import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import styles from "./Cartitem.module.css";
import ItemImage from "./ItemImage";
import { v4 as uuidv4 } from "uuid";
import {
  createItemObjAction,
  deleteItemObjAction,
} from "../../../../../redux/ActionCreators/Actions";

class CartItem extends Component {
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
      <div className={styles.cart}>
        <div>
          {this.state.id.map((id) => (
            <div key={uuidv4()}>
              {id.count ? (
                <div className={styles.cart__item}>
                  <Item
                    item={id.name}
                    client={this.props.client}
                    currency={this.props.currency}
                  />
                  <div className={styles.count}>
                    <button
                      className={styles.count__button}
                      onClick={() => addItemObjCart(id)}
                    >
                      +
                    </button>
                    <div>{id.count}</div>
                    <button
                      className={styles.count__button}
                      onClick={() => deleteItemObjCart(id)}
                    >
                      -
                    </button>
                  </div>
                  <ItemImage item={id.name} client={this.props.client} />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
