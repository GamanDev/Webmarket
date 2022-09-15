import React, { Component } from "react";
import { dataFetching } from "../../../utils/dataFetching";
import "../../Main.css";
import withRouter from "../../HOC/MainHOC";
import { clothesProducts } from "../../../utils/gql/clothesProducts";
import MainInStock from "../../Main/MainSort/MainInStock";
import MainHigh from "../../Main/MainSort/MainHigh";
import MainLow from "../../Main/MainSort/MainLow";
import MainDefault from "../../Main/MainSort/MainDefault";
import Sort from "../../Main/Sort";

class ClothesCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isMounted: true,
      query: this.props.query,
      id: "",
      prices: [],
      curr: 0,
      sortByPriceHigh: false,
      sortByPriceLow: false,
      sortByInStock: false,
      sortByDefault: true,
      openSort: false,
    };
  }

  componentDidMount() {
    if (this.state.isMounted) {
      dataFetching(this.props, clothesProducts).then((result) =>
        this.setState({
          ...this.state,
          products: result.data.category.products,
        })
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.curr !== this.props.currency) {
      this.setState({ curr: this.props.currency });
    }
  }

  componentWillUnmount() {
    return this.setState({ isMounted: false });
  }
  render() {
    const toggleSort = (e) => {
      e.stopPropagation();

      this.setState({
        ...this.state,
        openSort: !this.state.openSort,
      });
    };

    const low = () => {
      this.setState({
        ...this.state,
        sortByPriceHigh: false,
        sortByPriceLow: true,
        sortByInStock: false,
        sortByDefault: false,
        openSort: false,
      });
    };
    const high = () => {
      this.setState({
        ...this.state,
        sortByPriceHigh: true,
        sortByPriceLow: false,
        sortByInStock: false,
        sortByDefault: false,
        openSort: false,
      });
    };
    const inStock = () => {
      this.setState({
        ...this.state,
        sortByPriceHigh: false,
        sortByPriceLow: false,
        sortByInStock: true,
        sortByDefault: false,
        openSort: false,
      });
    };
    const defaultSort = () => {
      this.setState({
        ...this.state,
        sortByPriceHigh: false,
        sortByPriceLow: false,
        sortByInStock: false,
        sortByDefault: true,
        openSort: false,
      });
    };
    return (
      <div onClick={() => this.setState({ openSort: false })}>
        {!this.state.id && <h2>Clothes</h2>}
        <div>
          <div onClick={toggleSort} className="sort_button">
            Filter By:
          </div>
          {this.state.openSort && (
            <Sort
              low={low}
              high={high}
              inStock={inStock}
              defaultSort={defaultSort}
            />
          )}
        </div>
        <div className="land">
          {this.state.products && this.state.sortByDefault && (
            <MainDefault
              products={this.state.products}
              curr={this.state.curr}
            />
          )}

          {this.state.products && this.state.sortByPriceLow && (
            <MainLow products={this.state.products} curr={this.state.curr} />
          )}

          {this.state.products && this.state.sortByPriceHigh && (
            <MainHigh products={this.state.products} curr={this.state.curr} />
          )}

          {this.state.products && this.state.sortByInStock && (
            <MainInStock
              products={this.state.products}
              curr={this.state.curr}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ClothesCategory);
