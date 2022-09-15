import React, { Component } from "react";
import styles from "../../../Nav/NavCart/Cart/Item/Item.module.css";
import { connect } from "react-redux";

class SizeCheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Size: [],
      ItemsInCart: [],
    };

    this.attribute = this.props.attribute;
    this.valueSetter = this.props.valueSetter;
    this.Size = this.props.Size;
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      Size: this.props.Size,
      ItemsInCart: this.props.ItemsInCart,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.Size !== this.props.Size) {
      this.setState({ ...this.state, Size: this.props.Size });
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
                    {this.attribute.name === "Size" &&
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
    Size: state.formReducer.Size,
    ItemsInCart: state.cartReducer.ItemsInCart,
  };
};

export default connect(mapStateToProps)(SizeCheckBox);
