import React, { Component } from "react";
import Select from "./Select";
import styles from "./Attribute.module.css";

export default class Attribute extends Component {
  render() {
    const { attribute, classSwatch, classText } = this.props;
    return (
      <>
        <h3>{attribute.name}</h3>
        <Select
          attribute={attribute}
          classSwatch={classSwatch}
          classText={classText}
        />
      </>
    );
  }
}
