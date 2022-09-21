import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Layout/Layout";
import Nav from "./Components/Navbar/Nav";
import Product from "./pages/product/[product_id]";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/:category" element={<Main />} />
          {/* <Route path="/clothes" element={<Main category={"clothes"} />} />
          <Route path="/tech" element={<Main category={"tech"} />} /> */}
          <Route path="/product/:product_id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
