import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Navbar/Nav";
import Product from "./pages/product/[product_id]";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            path="/bliminse/:category"
            render={(props) => <Layout {...props} />}
          />
          <Route path="/product/:product_id" component={Product} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
