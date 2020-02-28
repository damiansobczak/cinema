import React, { useContext, useState } from 'react';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu.js"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Cart from "./components/cart/Cart";
import Modal from "./components/modal/Modal";
import Wrapper from "./components/wrapper/Wrapper";
import { StateContext } from "./StateContext";

export default function App() {
  const context = useContext(StateContext);
  const [film, setFilm] = useState(null);

  return (
    <StateContext.Provider value={{
      chooseFilm: (film) => {
        setFilm(film);
      },
      film: film,
      reservation: [
        {
          "id": 0,
          "price": "$10",
          "seat": "12",
          "row": "7"
        },
        {
          "id": 1,
          "price": "$10",
          "seat": "13",
          "row": "7"
        },
        {
          "id": 2,
          "price": "$10",
          "seat": "14",
          "row": "7"
        }
      ]
    }}>
      <div className="app">
        <Navbar />
        <Menu />
        <Breadcrumbs />
        <Cart />
        <Wrapper />
        {context.success && <Modal />}
      </div>
    </StateContext.Provider>
  );
}

