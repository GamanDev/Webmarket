import React, { Component } from "react";
import Attribute from "./Attribute";

export default class Attributes extends Component {
  render() {
    const { attributes, classSwatch, classText } = this.props;
    return (
      <div>
        {attributes.map((attribute) => (
          <Attribute
            key={attribute.id}
            attribute={attribute}
            classSwatch={classSwatch}
            classText={classText}
          />
        ))}
      </div>
    );
  }
}
