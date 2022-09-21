import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Navbar/Nav";
import Product from "./pages/product/[product_id]";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/bliminse/:category" element={<Layout />} /> */}

          <Route path="/bliminse/all" element={<Layout category={"all"} />} />
          <Route
            path="/bliminse/clothes"
            element={<Layout category={"clothes"} />}
          />
          <Route path="/bliminse/tech" element={<Layout category={"tech"} />} />

          <Route path="/product/:product_id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
