import React, { Component } from "react";
import Selects from "./Selects";

export default class Attributes extends Component {
  render() {
    const { attributes, className } = this.props;

    return attributes.map((attribute, i) => (
      <div key={attribute.id}>
        <h3 className={className}>{attribute.name}</h3>
        <Selects
          attribute={attribute}
          attributeIndex={i}
          product={this.props}
        />
      </div>
    ));
  }
}
