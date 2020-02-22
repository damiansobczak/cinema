import React from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu.js"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Cart from "./components/cart/Cart";
import Films from "./components/films/Films";
import Room from "./components/Room/Room";
import Modal from "./components/modal/Modal";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Menu />
        <Breadcrumbs />
        <Cart />
        {/* <Films /> */}
        <Room />
        <Modal />
      </div>
    );
  }
}

export default App;
