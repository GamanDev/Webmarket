import React, { Component } from "react";
import withRouter from "../../Components/HOC/useParams";
import Product from "./[product_id]";

class ProductByIdWrapper extends Component {
  render() {
    return (
      <div>
        <Product id={this.props.params.product_id} />
      </div>
    );
  }
}

export default withRouter(ProductByIdWrapper);
