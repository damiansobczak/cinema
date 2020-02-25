import React from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu.js"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Cart from "./components/cart/Cart";
import Films from "./components/films/Films";
import Room from "./components/Room/Room";
import Modal from "./components/modal/Modal";
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
        film: this.state
      }}>
        <div className="app">
          <Navbar />
          <Menu />
          <Breadcrumbs />
          <Cart />
          {this.state.film ? <Room /> : <Films />}
          {this.state.success && <Modal />}
        </div>
      </StateContext.Provider>
    );
  }
}

export default App;
