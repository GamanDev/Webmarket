import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Layout/Layout";
import Nav from "./Components/Navbar/Nav";
import ProductByIdWrapper from "./pages/product/ProductWrapper";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/:category" element={<Main />} />
          {/* <Route path="/clothes" element={<Main category={"clothes"} />} />
          <Route path="/tech" element={<Main category={"tech"} />} /> */}
          <Route path="/product/:product_id" element={<ProductByIdWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
