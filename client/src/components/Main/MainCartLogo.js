import React, { Component } from "react";
import cart from "../../img/white_cart.png";
import wheel from "../../img/white_wheel.png";
import circle from "../../img/green_round.png";
import { connect } from "react-redux";
import { createItemObjAction } from "../../redux/ActionCreators/Actions";

class MainCartLogo extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.product = this.props.product;
    this.addItemToCart = this.props.addItemToCart;
    this.createItemObj = this.props.createItemObj;
  }
  render() {
    const handleItemObj = () => {
      const itemObj = {
        name: this.product.id,
        price: this.product.prices,
        count: 1,
      };
      this.createItemObj(itemObj);
    };

    return (
      <div className="green_cart" onClick={handleItemObj}>
        <img src={circle} alt="round" className="round" />
        <img src={cart} alt="cart" className="cart" />
        <img src={wheel} alt="wheel1" className="wheel1" />
        <img src={wheel} alt="wheel2" className="wheel2" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createItemObj: (obj) => dispatch(createItemObjAction(obj)),
  };
}

export default connect(null, mapDispatchToProps)(MainCartLogo);
