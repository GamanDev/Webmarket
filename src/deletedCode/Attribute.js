import React, { Component } from "react";
import Options from "./Options";
import OptionsColor from "./OptionsColor";
import styles from "./Attribute.module.css";

export default class Attribute extends Component {
  setActiveAttribute = (e, styleName) => {
    let array = [...e.target.parentElement.children];

    array.map((child) => {
      if (child.classList.contains(styles[styleName])) {
        return child.classList.remove(styles[styleName]);
      }
      return "";
    });

    e.target.classList.add(styles[styleName]);
  };

  render() {
    const { attributes, setAttributes, options, stl } = this.props;

    return (
      <div>
        {attributes.map((attribute) => (
          <div key={attribute.id}>
            {attribute.name === "Color" ? (
              <OptionsColor
                stl={stl}
                setAttributes={setAttributes}
                items={attribute.items}
                name={attribute.name}
                setActiveAttribute={this.setActiveAttribute}
                options={options}
              />
            ) : options ? (
              <Options
                stl={stl}
                setAttributes={setAttributes}
                items={attribute.items}
                name={attribute.name}
                setActiveAttribute={this.setActiveAttribute}
                options={options[attribute.name]}
              />
            ) : (
              <Options
                stl={stl}
                setAttributes={setAttributes}
                items={attribute.items}
                name={attribute.name}
                setActiveAttribute={this.setActiveAttribute}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}
