import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Bigcartcheckboxes.module.css";

class BigCartCheckBoxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Color: [],
      TouchID: [],
      USB: [],
      Size: [],
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
      Size: this.props.Size,
      Capacity: this.props.Capacity,
      ItemsInCart: this.props.ItemsInCart,
      USB: this.props.USB,
      TouchID: this.props.TouchID,
      Color: this.props.Color,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.Size !== this.props.Size) {
      this.setState({ ...this.state, Size: this.props.Size });
    }
    if (prevState.Capacity !== this.props.Capacity) {
      this.setState({ ...this.state, Capacity: this.props.Capacity });
    }
    if (prevState.ItemsInCart !== this.props.ItemsInCart) {
      this.setState({ ...this.state, ItemsInCart: this.props.ItemsInCart });
    }
    if (prevState.USB !== this.props.USB) {
      this.setState({ ...this.state, USB: this.props.USB });
    }
    if (prevState.TouchID !== this.props.TouchID) {
      this.setState({ ...this.state, TouchID: this.props.TouchID });
    }
    if (prevState.Color !== this.props.Color) {
      this.setState({ ...this.state, Color: this.props.Color });
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
                    ) : this.attribute.name === "Size" &&
                      this.state.Size.length &&
                      this.state.Size[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.Size[findIndex(this.props.id)].value &&
                      this.props.id === "jacket-canada-goosee" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "Size" &&
                      this.state.Size.length &&
                      this.state.Size[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.Size[findIndex(this.props.id)].value &&
                      this.props.id === "huarache-x-stussy-le" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "With USB 3 ports" &&
                      this.state.USB.length &&
                      this.state.USB[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.USB[findIndex(this.props.id)].value &&
                      this.props.id === "apple-imac-2021" &&
                      findIndex(this.props.id) >= 0 ? (
                      <input
                        type="radio"
                        name={this.attribute.name}
                        checked
                        onChange={(e) => {}}
                      />
                    ) : this.attribute.name === "Touch ID in keyboard" &&
                      this.state.TouchID.length &&
                      this.state.TouchID[findIndex(this.props.id)] &&
                      item.value ===
                        this.state.TouchID[findIndex(this.props.id)].value &&
                      this.props.id === "apple-imac-2021" &&
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
    Color: state.formReducer.Color,
    TouchID: state.formReducer.TouchID,
    Size: state.formReducer.Size,
    Capacity: state.formReducer.Capacity,
    ItemsInCart: state.cartReducer.ItemsInCart,
  };
};

export default connect(mapStateToProps)(BigCartCheckBoxes);
