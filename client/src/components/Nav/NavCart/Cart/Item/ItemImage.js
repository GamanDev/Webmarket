import React, { Component } from "react";
import { dataFetching } from "../../../../../utils/dataFetching";
import { productById } from "../../../../../utils/gql/productById";
import styles from "./Itemimage.module.css";

export default class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", product: [], index: 0 };
  }

  componentDidMount() {
    this.setState({ ...this.state, id: this.props.item });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== prevState.id) {
      dataFetching(this.props, productById(this.state.id)).then((result) =>
        this.setState({
          ...this.state,
          product: result.data.product,
        })
      );
    }
    if (prevProps.currency !== this.state.curr) {
      this.setState({ curr: this.props.currency });
    }
  }
  render() {
    return (
      <div>
        {this.state.product.gallery && (
          <img
            src={this.state.product.gallery[this.state.index]}
            alt=""
            className={styles.image}
          />
        )}
      </div>
    );
  }
}
