import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navbar/Nav";
import ProductByIdWrapper from "./Components/ProductById/ProductByIdWrapper";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main category={"all"} />} />
          <Route path="/clothes" element={<Main category={"clothes"} />} />
          <Route path="/tech" element={<Main category={"tech"} />} />
          <Route path="/:product_id" element={<ProductByIdWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
