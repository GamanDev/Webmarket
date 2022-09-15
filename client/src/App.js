import { Component } from "react";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { allProducts } from "./utils/gql/allProducts";
import { navCategories } from "./utils/gql/navCategories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClothesCategory from "./components/Nav/CategorySelector/ClothesCategory";
import TechCategory from "./components/Nav/CategorySelector/TechCategory";
import ProductById from "./components/ProductById/ProductById";
import BigCart from "./components/Nav/NavCart/Cart/BigCart/BigCart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: 0 };
  }

  render() {
    const currencySetter = (curr) => this.setState({ currency: curr });

    return (
      <BrowserRouter>
        <div>
          <Nav
            client={this.props.client}
            query={navCategories}
            currencySetter={currencySetter}
            currency={this.state.currency}
          />
          <Routes>
            <Route
              path="/tech"
              element={
                <TechCategory
                  client={this.props.client}
                  currency={this.state.currency}
                />
              }
            />
            <Route
              path="/clothes"
              element={
                <ClothesCategory
                  client={this.props.client}
                  currency={this.state.currency}
                />
              }
            />
            <Route
              path="/"
              element={
                <Main
                  client={this.props.client}
                  query={allProducts}
                  currency={this.state.currency}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <BigCart
                  client={this.props.client}
                  query={allProducts}
                  currency={this.state.currency}
                />
              }
            />
            <Route
              path="/:product_id"
              element={
                <ProductById
                  client={this.props.client}
                  currency={this.state.currency}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
