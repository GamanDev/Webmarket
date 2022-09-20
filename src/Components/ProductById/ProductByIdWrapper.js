import React, { Component } from "react";
import withRouter from "../HOC/useParams";
import Product from "./Product";

class ProductByIdWrapper extends Component {
  render() {
    return (
      <div>
        <div>ProductById</div>
        <Product id={this.props.params.product_id} />
      </div>
    );
  }
}

export default withRouter(ProductByIdWrapper);
