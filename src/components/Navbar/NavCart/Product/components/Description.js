import React, { Component } from "react";

export default class Description extends Component {
  render() {
    // console.log("descr", this.props.item);
    console.log("descr", this.props.product);
    const { brand, name, prices, attributes } = this.props.product;
    return (
      <main>
        <h4>{brand}</h4>
        <h4>{name}</h4>
        <div>Price: $50.00</div>
        <div>[Attribute section]</div>
      </main>
    );
  }
}
