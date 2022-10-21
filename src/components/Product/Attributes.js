import React, { Component } from "react";
import Attribute from "./Attribute";

export default class Attributes extends Component {
  // state with all selected attributes
  // state = {selected : []}
  // info about selected attribute || active attribute
  render() {
    const {
      attributes,
      classSwatch,
      classText,
      selectionsRef,
      selected,
      className,
    } = this.props;

    return attributes.map((attribute, i) => (
      <Attribute
        key={attribute.id}
        attribute={attribute}
        classSwatch={classSwatch}
        classText={classText}
        className={className}
        selectionsRef={selectionsRef}
        attributeIndex={i}
        selected={selected}
      />
    ));
  }
}
