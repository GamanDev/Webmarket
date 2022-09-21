import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";

import Nav from "./Navbar/Nav";

import Product from "./pages/product/[product_id]";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/all" />
          </Route>
          <Route path="/product/:product_id" component={Product} />
          <Route path="/:category" render={(props) => <Layout {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
