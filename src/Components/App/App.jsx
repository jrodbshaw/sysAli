import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import NavigationLink from "../NavigationLink";
import Product from "../Product";
import ProductStream from "../ProductStream";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <NavigationLink />
        <Product />
        <ProductStream />
      </div>
    );
  }
}

export default App;
