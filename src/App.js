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
  const [card, setCard] = useState(context.card);
  const [film, setFilm] = useState(null);
  const [reservation, setReservation] = useState(context.reservation);
  const [payment, setPayment] = useState(context.payment);
  const [modal, setModal] = useState(context.modal);

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
      choosePayment: () => {
        if (reservation.length && !payment && !card) {
          setPayment(true);
        }
        if (payment && reservation.length && card) {
          setModal(true);
        }
      },
      fillCard: (details) => {
        setCard(details);
      },
      toggleModal: () => {
        setModal(!modal);
      },
      modal: modal,
      film: film,
      payment: payment,
      reservation: reservation,
      card: card
    }}>
      <div className="app">
        <Navbar />
        <Menu />
        <Breadcrumbs />
        <Cart />
        <Wrapper />
        {modal && <Modal />}
      </div>
    </StateContext.Provider>
  );
}

