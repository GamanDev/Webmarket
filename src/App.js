import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navbar/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
