import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { gallery, className } = this.props;

    return <img src={gallery} alt="product_pic" className={className} />;
  }
}
