import React from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu.js"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Cart from "./components/cart/Cart";
import Modal from "./components/modal/Modal";
import Wrapper from "./components/wrapper/Wrapper";
import { StateContext } from "./StateContext";

class App extends React.Component {
  static contextType = StateContext;

  constructor(props, context) {
    super(props, context);
    this.state = context;
  }

  render() {
    return (
      <StateContext.Provider value={{
        chooseFilm: (film) => {
          this.setState({ film });
        },
        film: this.state.film
      }}>
        <div className="app">
          <Navbar />
          <Menu />
          <Breadcrumbs />
          <Cart />
          <Wrapper />
          {this.state.success && <Modal />}
        </div>
      </StateContext.Provider>
    );
  }
}

export default App;
