import React, { Component } from "react";
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
      className,
      onSelected,
    } = this.props;
    return (
      <>
        <h3 className={className}>{attribute.name}</h3>
        <Selects
          attribute={attribute}
          classSwatch={classSwatch}
          classText={classText}
          selectionsRef={selectionsRef}
          attributeIndex={attributeIndex}
          selected={selected}
          onSelected={onSelected}
        />
      </>
    );
  }
}
