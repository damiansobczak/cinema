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
  const [reservation, setReservation] = useState(context.reservation);

  return (
    <StateContext.Provider value={{
      chooseFilm: (film) => {
        setFilm(film);
      },
      chooseSeat: (seat, row) => {
        setReservation([...reservation, { price: '$10', seat, row }])
      },
      deleteSeat: (seat, row) => {
        const res = reservation.filter(item => {
          return !(item.seat == seat && item.row == row);
        });
        setReservation(res);
      },
      film: film,
      reservation: reservation
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

