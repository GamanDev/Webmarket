import React, { Component } from "react";
import styles from "./Attribute.module.css";
import Selects from "./Selects";

export default class Attribute extends Component {
  render() {
    const {
      attribute,
      classSwatch,
      classText,
      selectionsRef,
      attributeIndex,
      selected,
    } = this.props;
    return (
      <>
        <h3>{attribute.name}</h3>
        <Selects
          attribute={attribute}
          classSwatch={classSwatch}
          classText={classText}
          selectionsRef={selectionsRef}
          attributeIndex={attributeIndex}
          selected={selected}
        />
      </>
    );
  }
}
