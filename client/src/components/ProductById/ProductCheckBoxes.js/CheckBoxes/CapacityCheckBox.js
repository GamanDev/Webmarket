import React, { Component } from "react";
import styles from "../../../Nav/NavCart/Cart/Item/Item.module.css";
import { connect } from "react-redux";

class CapacityCheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Capacity: [],
      ItemsInCart: [],
    };

    this.attribute = this.props.attribute;
    this.valueSetter = this.props.valueSetter;
    this.Capacity = this.props.Capacity;
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      Capacity: this.props.Capacity,
      ItemsInCart: this.props.ItemsInCart,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.USB !== this.props.USB) {
      this.USB = this.props.USB;
    }
    if (prevProps.TouchID !== this.props.TouchID) {
      this.TouchID = this.props.TouchID;
    }
    if (prevProps.Size !== this.props.Size) {
      this.Size = this.props.Size;
    }
    if (prevProps.Capacity !== this.props.Capacity) {
      this.Capacity = this.props.Capacity;
    }
    if (prevProps.Color !== this.props.Color) {
      this.Color = this.props.Color;
    }
    if (prevState.Capacity !== this.props.Capacity) {
      this.setState({ ...this.state, Capacity: this.props.Capacity });
    }
    if (prevState.ItemsInCart !== this.props.ItemsInCart) {
      this.setState({ ...this.state, ItemsInCart: this.props.ItemsInCart });
    }
  }

  render() {
    const findIndex = (id) => {
      if (this.state.ItemsInCart.length) {
        return this.state.ItemsInCart.findIndex((el) => el.name === id);
      }
    };

    return (
      <div>
        {findIndex(this.props.id) >= 0 && (
          <>
            <div className={styles.attribute__name}>{this.attribute.name}:</div>
            <div className={styles.product__form}>
              {this.attribute.items &&
                this.attribute.items.map((item) => (
                  <label
                    key={item.value}
                    onClick={() => this.valueSetter(item.value)}
                  >
                    {this.attribute.name === "Capacity" &&
                    this.state.Capacity.length &&
                    this.state.Capacity[findIndex(this.props.id)] &&
                    item.value ===
                      this.state.Capacity[findIndex(this.props.id)].value &&
                    this.props.id === "xbox-series-s" &&
                    findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "Capacity" &&
                      this.state.Capacity.length &&
                      this.state.Capacity[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.Capacity[findIndex(this.props.id)].value &&
                      this.props.id === "apple-iphone-12-pro" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "Capacity" &&
                      this.state.Capacity.length &&
                      this.state.Capacity[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.Capacity[findIndex(this.props.id)].value &&
                      this.props.id === "apple-imac-2021" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "Capacity" &&
                      this.state.Capacity.length &&
                      this.state.Capacity[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.Capacity[findIndex(this.props.id)].value &&
                      this.props.id === "ps-5" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : (
                      <input type="radio" name={this.attribute.name} />
                    )}

                    {this.attribute.name === "Color" ? (
                      <div
                        className={styles.boxes__color}
                        style={{ background: `${item.value}` }}
                      ></div>
                    ) : (
                      <div className={styles.boxes}>{item.value}</div>
                    )}
                  </label>
                ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    USB: state.formReducer.WithUSB,
    TouchID: state.formReducer.TouchID,
    Size: state.formReducer.Size,
    Capacity: state.formReducer.Capacity,
    Color: state.formReducer.Color,
    ItemsInCart: state.cartReducer.ItemsInCart,
  };
};

export default connect(mapStateToProps)(CapacityCheckBox);
