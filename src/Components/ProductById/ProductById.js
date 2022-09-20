import React, { Component } from "react";
import withRouter from "../HOC/useParams";

class ProductById extends Component {
  render() {
    console.log(this.props.params.product_id);
    const { product_id: id } = this.props.params;
    return (
      <div>
        <div>ProductById</div>
        <h2>{id}</h2>
      </div>
    );
  }
}

export default withRouter(ProductById);
