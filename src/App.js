import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Navbar";
import Cart from "./pages/cart";
import Layout from "./pages/[category]";
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
          <Route path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/product/:product_id" component={Product} />
          <Route path="/:category" component={Layout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
