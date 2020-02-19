import React from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu.js"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Cart from "./components/cart/Cart";
import Films from "./components/films/Films";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Menu />
        <Breadcrumbs />
        <Cart />
        <Films />
      </div>
    );
  }
}

export default App;
