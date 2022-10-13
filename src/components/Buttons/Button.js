import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { value, className } = this.props;
    return <button className={className}>{value}</button>;
  }
}
